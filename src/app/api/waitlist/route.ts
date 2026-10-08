import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "waitlist.ndjson");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Email tidak valid." }, { status: 400 });
  }

  const entry = {
    email: email.trim().toLowerCase(),
    at: new Date().toISOString(),
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(DATA_FILE, JSON.stringify(entry) + "\n", "utf8");
  } catch {
    return NextResponse.json(
      { error: "Gagal menyimpan. Coba lagi." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
