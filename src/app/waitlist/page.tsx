"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <main className="box-border w-full min-h-screen flex flex-col items-center bg-[#fafaf7]">
      <div className="box-border w-full flex flex-col items-center p-[16px_24px_0px_24px]">
        <div className="box-border w-[1392px] h-fit flex flex-row gap-[24px] p-[12px_0px_12px_4px] justify-between items-center">
          <a
            href="/"
            className="box-border w-fit h-fit flex flex-row gap-0 items-center"
          >
            <div className="box-border w-[31.2px] h-[31.2px] relative">
              <div className="box-border w-[31.2px] h-[31.2px] bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center" />
            </div>
            <div className="text-[21px]/[21px] box-border text-[#45434a] font-inter-variable font-normal tracking-[-0.8px] pl-[10px]">
              whip
            </div>
          </a>
          <div className="box-border w-fit h-fit flex flex-row gap-[29.99px] justify-center items-center">
            <a
              href="/#why"
              className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] [white-space:nowrap]"
            >
              Why Whip
            </a>
            <a
              href="/#features"
              className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] [white-space:nowrap]"
            >
              Features
            </a>
            <a
              href="/#possible"
              className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] [white-space:nowrap]"
            >
              What’s Possible
            </a>
          </div>
          <a
            href="/waitlist"
            className="box-border w-fit h-fit flex flex-row gap-0 p-[11px_18px] justify-center items-center bg-[#2a2a27] rounded-[999px]"
          >
            <div className="text-[14px]/[17px] box-border text-[#ffffff] font-inter font-medium text-center [white-space:nowrap]">
              Join waitlist
            </div>
          </a>
        </div>
      </div>

      <div className="box-border w-full flex flex-col items-center p-[0px_24px_0px_24px]">
        <div className="box-border w-[1120px] h-fit flex flex-col gap-[26px] p-[52px_0px_0px_0px] justify-start items-center">
          <div className="text-[11px]/[15.4px] box-border w-full text-[#b1aea5] font-geist-mono-variable font-normal tracking-[1.76px] text-center">
            EARLY ACCESS
          </div>
          <div className="text-[64px]/[65.28px] box-border w-full text-[#2a2a27] font-inter-variable font-normal tracking-[-1.92px] text-center">
            Let your agents do the work.
          </div>
          <div className="box-border w-[720px] h-fit flex flex-col gap-0 justify-start items-center">
            <div className="text-[22px]/[31.9px] box-border w-full text-[#8a8880] font-inter-variable font-normal tracking-[-0.264px] text-center">
              Whip is the macOS Agent Super App for builders directing AI coding agents. Drop your email and we’ll send you a private beta build.
            </div>
          </div>

          <div className="box-border w-fit h-fit flex flex-col gap-0 p-[34px_0px_0px_0px] justify-start items-center">
            {state === "done" ? (
              <div className="box-border w-[520px] h-[52px] flex flex-row items-center justify-center bg-[#ffffff] rounded-[12px] [border:1px_solid_#e7e0d5]">
                <div className="text-[16px]/[19.2px] box-border text-[#2a2a27] font-inter-variable font-normal">
                  ✓ You’re on the list. We’ll be in touch soon.
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="box-border w-[520px] h-[52px] flex flex-row gap-[10px] items-center"
              >
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="box-border flex-1 h-[52px] px-[16px] bg-[#ffffff] rounded-[12px] [border:1px_solid_#e7e0d5] text-[16px]/[19.2px] text-[#2a2a27] font-inter-variable font-normal tracking-[-0.096px] outline-none focus:[border:1px_solid_#2a2a27]"
                />
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="box-border w-[163.7px] h-[52px] flex items-center justify-center bg-[#2a2a27] rounded-[12px] disabled:opacity-60 cursor-pointer"
                >
                  <span className="text-[15px]/[18px] box-border text-[#ffffff] font-inter-variable font-normal">
                    {state === "sending" ? "Joining…" : "Join waitlist"}
                  </span>
                </button>
              </form>
            )}
          </div>

          <div className="text-[15px]/[21.75px] box-border w-full text-[#8a8880] font-inter-variable font-normal tracking-[-0.075px] text-center">
            One email only, when your build is ready.
          </div>
          {state === "error" ? (
            <div className="text-[14px]/[20px] box-border w-full text-[#c0392b] font-inter-variable font-normal text-center">
              Please enter a valid email address.
            </div>
          ) : null}

          <div className="box-border w-fit h-fit flex flex-row gap-[12px] p-[44px_0px_0px_0px] justify-center items-center">
            <div className="box-border w-[40px] h-[40px] shrink-0 flex items-center justify-center bg-[#e7e0d5] rounded-full">
              <span className="text-[16px]/[16px] font-inter font-medium text-[#2a2a27]">
                R
              </span>
            </div>
            <div className="box-border w-fit h-fit flex flex-col gap-0 justify-start items-start">
              <div className="text-[15px]/[19.5px] box-border text-[#2a2a27] font-inter font-medium tracking-[-0.18px]">
                Radea
              </div>
              <div className="text-[14px]/[19.6px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.07px]">
                Creator of Whip · Vibe coding workspace
              </div>
            </div>
          </div>
        </div>

        <div className="box-border w-full flex flex-col items-center p-[60px_60px_0px_60px]">
          <div className="box-border w-[1100px] h-[618.8px] rounded-[18px] overflow-hidden [border:1px_solid_#eae8e1] [box-shadow:0px_4px_24px_#2a2a271a,_0px_0px_1px_#2a2a2714] bg-[#1c1b19] flex flex-col">
            <div className="box-border w-full h-[38px] shrink-0 flex flex-row gap-[8px] px-[14px] items-center bg-[#2a2a27]">
              <div className="box-border w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
              <div className="box-border w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
              <div className="box-border w-[9px] h-[9px] rounded-full bg-[#28c840]" />
              <div className="text-[11px]/[14px] box-border font-geist-mono text-[#8a8880] pl-[10px]">
                whip — 3 panes
              </div>
            </div>
            <div className="box-border w-full flex-1 flex flex-row gap-[1px] p-[1px] bg-[#e7e0d5]">
              <div className="box-border flex-1 h-full flex flex-col gap-[6px] p-[18px] bg-[#1c1b19]">
                <div className="text-[12px]/[16px] box-border font-geist-mono text-[#3aa676]">
                  claude
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#d5d2ca]">
                  $ claude
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  Refactor auth module,
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  isolate token handlers.
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#3aa676] pt-[6px]">
                  ✓ 4 files changed
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#3aa676]">
                  ✓ tests passing
                </div>
              </div>
              <div className="box-border flex-1 h-full flex flex-col gap-[6px] p-[18px] bg-[#232220]">
                <div className="text-[12px]/[16px] box-border font-geist-mono text-[#a98bf0]">
                  codex
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#d5d2ca]">
                  $ codex
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  Write test suite for
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  webhook failures.
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#3aa676] pt-[6px]">
                  ✓ 12 new tests
                </div>
              </div>
              <div className="box-border flex-1 h-full flex flex-col gap-[6px] p-[18px] bg-[#1c1b19]">
                <div className="text-[12px]/[16px] box-border font-geist-mono text-[#2b6cf5]">
                  gemini
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#d5d2ca]">
                  $ gemini
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  Update documentation
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#8a8880]">
                  for /v2/orders endpoint.
                </div>
                <div className="text-[13px]/[20px] box-border font-geist-mono text-[#3aa676] pt-[6px]">
                  ✓ README updated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-border w-full h-fit flex flex-col gap-[28px] p-[40px_60px_56px_60px] justify-start items-center bg-[#ffffff] mt-[60px]">
        <div className="box-border w-[1240px] h-fit flex flex-row justify-between items-start">
          <div className="box-border w-fit h-fit flex flex-col gap-[8.9px] justify-start items-start">
            <div className="text-[14px]/[17px] box-border text-[#2a2a27] font-geist-mono-variable font-normal tracking-[0.84px]">
              PAGES
            </div>
            <a href="/#why" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px]">
              WHY WHIP
            </a>
            <a href="/#features" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px]">
              FEATURES
            </a>
            <a href="/#guides" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px]">
              GUIDES
            </a>
            <a href="/#workflows" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px]">
              AGENT WORKFLOWS
            </a>
            <a href="/waitlist" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px]">
              JOIN WAITLIST
            </a>
          </div>
          <div className="box-border w-[88px] h-[88px] relative">
            <div className="box-border w-[88px] h-[88px] bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center" />
          </div>
        </div>
        <div className="box-border w-[1240px] h-[1px] bg-[#eae8e1]" />
        <div className="box-border w-[1240px] h-fit flex flex-row gap-[24px] justify-start items-start">
          <div className="text-[12px]/[14px] box-border text-[#2a2a27] font-geist-mono-variable font-normal tracking-[0.72px]">
            WHIP © 2026
          </div>
          <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.72px]">
            PRIVACY
          </div>
          <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.72px]">
            TERMS
          </div>
          <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.72px]">
            THE AGENT SUPER APP FOR MACOS
          </div>
        </div>
      </div>
    </main>
  );
}
