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
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const entry = {
    email: email.trim().toLowerCase(),
    at: new Date().toISOString(),
  };

  try {
    try {
      await mkdir(DATA_DIR, { recursive: true });
      await appendFile(DATA_FILE, JSON.stringify(entry) + "\n", "utf8");
    } catch {
      // Fallback for serverless environments with read-only root filesystems
      const tmpFile = path.join("/tmp", "waitlist.ndjson");
      await appendFile(tmpFile, JSON.stringify(entry) + "\n", "utf8");
    }
  } catch (err) {
    console.error("Waitlist storage error:", err);
    return NextResponse.json(
      { error: "Unable to save. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
