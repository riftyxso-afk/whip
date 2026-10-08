# PRD — Whip

| Field | Isi |
|---|---|
| Nama produk | **Whip** — *Crack the whip on your AI agents* |
| Dokumen | PRD v1.0 |
| Tanggal | 2026-10-07 |
| Status | Draft — menunggu validasi pasar |
| Dokumen terkait | `MVP.md` (ringkasan), scaffold `~/workspace/whip/` |

---

## 1. Latar Belakang & Masalah

Vibe coding — membangun software dengan mendeskripsikan perubahan ke AI agent —
berkembang pesat, tapi tooling-nya terfragmentasi: terminal di satu app, chat AI di
app lain, voice dictation di app ketiga. [BridgeMind](https://www.bridgemind.ai/)
membuktikan ada pasar untuk "Agent Super App" desktop ($50/bln), namun:

1. **Harga tidak cocok** untuk daya beli builder Indonesia.
2. **Tidak ada pembayaran lokal** (QRIS, GoPay, OVO, DANA).
3. **Voice-to-text Inggris-sentris** — dikte prompt Bahasa Indonesia tidak dilayani.
4. **Target pasar global** — tidak ada lokalisasi maupun komunitas Indonesia.

**Whip** mengisi celah itu: Agent Super App macOS-first untuk Indonesia.

## 2. Tujuan & Metrik Sukses

### Tujuan
1. Menjadi ruang kerja utama builder Indonesia untuk menjalankan AI coding agents.
2. Mencapai 100 pengguna berbayar dalam 6 bulan setelah launch.
3. MRR Rp5 juta/bulan pada akhir tahun pertama sebagai fondasi menuju goal
   "penghasilan dari proyek AI".

### Metrik sukses (6 bulan pertama)
- Waitlist ≥ 500 pendaftar sebelum launch.
- Konversi waitlist → trial ≥ 20%.
- Trial → berbayar ≥ 15%.
- Churn bulanan < 8%.
- NPS ≥ 40 dari pengguna Pro.

### Non-tujuan (di luar PRD ini)
- Menanggung biaya LLM / menyediakan model AI sendiri (tetap BYO AI).
- Versi Windows/Linux sebelum v1.0 macOS stabil.
- Fitur kolaborasi tim real-time (masuk roadmap v2+).

## 3. Target Pengguna & Persona

### Persona 1 — Dimas, freelance web developer (primer)
- 24 th, Surabaya. Mengerjakan 3–4 proyek klien via Upwork/lokal.
- Sudah pakai Claude Code / Gemini CLI, langganan AI sendiri.
- Butuh: menjalankan beberapa agent paralel tanpa pusing window management;
  bayar pakai QRIS; dikte instruksi pakai Bahasa Indonesia biar cepat.

### Persona 2 — Sinta, indie hacker / solo founder
- 29 th, Jakarta. Membangun SaaS sendirian.
- Butuh: satu command center untuk coding, review, dan eksperimen; murah;
  tidak mau ribet kartu kredit.

### Persona 3 — Bimo, mahasiswa Sistem Informasi (sekunder)
- 21 th, Denpasar. Belajar vibe coding.
- Butuh: tier gratis/murah untuk coba-coba; UI Bahasa Indonesia.

## 4. User Stories (Prioritas MVP)

1. Sebagai Dimas, saya ingin **membuka beberapa panel terminal dalam satu window**
   agar bisa menjalankan 3 agent paralel tanpa alt-tab.
2. Sebagai Dimas, saya ingin **menjalankan `claude` / `codex` / `gemini` langsung
   dari panel** dengan akun AI saya sendiri, tanpa setup ulang.
3. Sebagai Sinta, saya ingin **menahan satu tombol, bicara Bahasa Indonesia, dan
   hasilnya jadi teks di prompt agent** — tanpa upload audio ke server.
4. Sebagai Sinta, saya ingin **bayar langganan pakai QRIS** dari HP saya.
5. Sebagai Bimo, saya ingin **membaca ringkasan hasil kerja agent** (thread)
   tanpa scroll terminal panjang.
6. Sebagai Dimas, saya ingin **ganti akun AI** (pribadi vs klien) tanpa logout/login ulang.

## 5. Functional Requirements

### FR-1 — Workspace Multi-Pane Terminal (P0)
- Grid panel yang bisa di-split horizontal/vertikal, drag untuk resize, dan
  tombol "rapikan" (snap ke preset).
- Tiap pane = **PTY asli** (bukan emulasi): shell beneran di folder proyek user.
- xterm.js untuk rendering; support copy/paste, pencarian teks, dan klik link.
- Keyboard shortcut: tambah pane, tutup pane, fokus pane berikutnya.
- Kriteria terima: 8 pane paralel tetap responsif di MacBook Air M1.

### FR-2 — Agent Launcher & Deteksi Otomatis (P0)
- Saat startup, Whip memindai PATH dan mendeteksi CLI agent yang terinstall:
  Claude Code, Codex, Gemini CLI, Copilot CLI, Aider, OpenCode, dll.
- Quick-launch: pilih agent dari dropdown → perintahnya diketik otomatis di pane aktif.
- Template perintah per agent bisa dikustom di Settings.
- Kriteria terima: agent yang ada di PATH muncul dalam < 2 detik setelah launch.

### FR-3 — Whip Voice: Dikte Bahasa Indonesia On-Device (P0)
- Tahan tombol global (default: `Fn` dua kali atau hotkey kustom) → rekam →
  lepas → teks masuk ke field yang sedang fokus (terminal/prompt agent).
- Engine: whisper.cpp on-device, model Bahasa Indonesia (unduh sekali, pilih
  ukuran: kecil/cepat vs besar/akurat).
- Mode cloud sebagai opsi (bayar per pakai via kredit) untuk akurasi maksimal.
- "Enhance Prompt": merapikan hasil dikte yang bertele-tele jadi brief yang
  bisa dieksekusi agent.
- Kriteria terima: latensi akhir-ke-akhir < 2 detik untuk ucapan 15 detik
  (model small, Apple Silicon); audio **tidak pernah** keluar dari mesin di mode lokal.

### FR-4 — Threads: Baca Hasil Kerja, Bukan Menontonnya (P1)
- Setiap sesi agent bisa dibuka sebagai thread: ringkasan + diff file penting.
- Thread tersimpan lokal (SQLite), bisa dicari.
- Kriteria terima: ringkasan tersedia < 5 detik setelah sesi selesai.

### FR-5 — Multi-Akun AI (P1)
- Daftarkan beberapa akun (kerja, pribadi, klien); tiap akun login via mekanisme
  resmi provider-nya sendiri — **Whip tidak pernah menyimpan token mereka**.
- Set akun default + override per workspace/pane.
- Saat satu akun kena limit, user bisa lanjut di akun lain; ringkasan konteks
  dibawa otomatis.
- Kriteria terima: ganti akun tanpa restart agent/kehilangan pekerjaan.

### FR-6 — Lisensi & Langganan (P0)
- Sign in with Google; lisensi dicek ke server saat startup (cache offline 7 hari).
- Tier: **Basic** (app penuh, voice lokal, 5.000 kredit/bln) dan **Pro**
  (12.500 kredit/bln + prioritas fitur baru). Kandidat harga: Rp49rb / Rp99rb.
- Kredit dipakai untuk fitur metered: cloud transcription, AI enhance, dsb.
  Voice on-device **tidak** memakan kredit.
- Pembayaran: QRIS, GoPay, OVO, DANA, VA bank via Mayar/Xendit; bisa bulanan.
- Garansi 7 hari untuk pembelian Pro pertama.
- Kriteria terima: alur bayar QRIS selesai < 3 menit dari dalam app.

### FR-7 — Bahasa & Lokalisasi (P0)
- UI Bahasa Indonesia sebagai default; toggle ke Inggris.
- Format tanggal, angka, dan mata uang mengikuti locale id-ID.

### FR-8 — Settings & Auto-Update (P0)
- Settings: hotkey voice, model voice, tema, font terminal, template agent,
  akun, langganan.
- Auto-update via Tauri updater (delta update, tanpa download ulang penuh).
- Kriteria terima: update terinstall dengan 1 klik + restart.

## 6. Non-Functional Requirements

| Kategori | Requirement |
|---|---|
| Performa | Startup < 3 detik (dingin); idle RAM < 150MB; ukuran installer < 30MB |
| Keamanan | CSP ketat; tidak ada akses filesystem di luar izin; token provider tidak disimpan; audio lokal tidak diupload |
| Privasi | Local-first; telemetri hanya anonim & opt-in; data sesi milik user |
| Reliabilitas | Crash pane tidak mematikan app; sesi PTY survive saat window di-resize |
| Kompatibilitas | macOS 14+; universal binary (Apple Silicon + Intel); signed + notarized |
| Aksesibilitas | Semua aksi utama bisa via keyboard; kontras teks memenuhi WCAG AA |

## 7. Alur Pengguna Utama

**Alur A — Pertama kali pakai (onboarding):**
Install DMG → buka Whip → sign in Google → pilih tier (trial Pro 7 hari) →
Whip mendeteksi agent di PATH → user buka 2 pane → jalankan `claude` di pane 1 →
tahan hotkey, dikte Bahasa Indonesia → teks masuk ke prompt → agent bekerja.

**Alur B — Bayar dengan QRIS:**
Settings → Langganan → pilih Pro → pilih QRIS → scan dari HP → webhook
konfirmasi → lisensi aktif, tanpa restart app.

**Alur C — Akun kena limit:**
Agent berhenti (limit) → Whip menawarkan "lanjutkan di akun Klien" →
ringkasan konteks dibawa → kerja lanjut di pane yang sama.

## 8. Arsitektur Teknis (Ringkas)

Detail di `MVP.md`. Intinya: **Tauri 2.12 + React 19 + Rust**; PTY via
`portable-pty`; terminal via xterm.js; voice via whisper.cpp; data via SQLite;
server hanya untuk lisensi/billing. Semua keputusan arsitektur mengutamakan:
binary kecil, local-first, dan BYO AI.

## 9. Rencana Rilis

| Fase | Isi | Estimasi |
|---|---|---|
| v0.1 (MVP) | FR-1, FR-2, FR-3 (UI+lokal), FR-6, FR-7, FR-8 | 8–10 minggu |
| v0.2 | FR-4 (threads), FR-5 (multi-akun), whisper.cpp penuh | +6 minggu |
| v1.0 | Stabilisasi, template workflow lokal, Windows/Linux | +8 minggu |

Paralel sejak hari pertama: landing page + waitlist untuk validasi
(target 500 pendaftar sebelum v0.1 selesai).

## 10. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| CLI pihak ketiga berubah/breaking | Tinggi | Abstraksi "agent adapter"; deteksi versi saat startup |
| Pasar ID yang mau bayar kecil | Tinggi | Validasi via waitlist; tier murah; trial 7 hari |
| BridgeMind tambah payment lokal | Sedang | Parit: voice Indonesia + komunitas + harga |
| whisper.cpp model ID kurang akurat | Sedang | Opsi cloud fallback; kontribusi evaluasi model lokal |
| Notarization Apple ditolak | Rendah | Ikuti guideline sejak awal; budgeting $99/thn |

## 11. Pertanyaan Terbuka

1. Harga final: Rp49rb/99rb atau lebih rendah untuk penetrasi? (Butuh survei waitlist.)
2. Mayar vs Xendit untuk recurring QRIS — mana yang fee & DX-nya lebih baik?
3. Model whisper.cpp Bahasa Indonesia mana yang jadi default? (Butuh benchmark.)
4. Apakah "Whip" lolos cek merek dagang Indonesia? (Cek sebelum launch.)
