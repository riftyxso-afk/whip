import { AgentRotator } from "@/components/AgentRotator";

export function SiteHero() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[14px] p-[12px_12px_0px_12px] justify-start items-center bg-[#fafaf7] overflow-hidden">
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center [background-image:linear-gradient(180deg,_#f7f7f5_0%,_#f5f4f6_58%,_#eee9f5_100%)] bg-no-repeat bg-size-[100%_100%] rounded-[28px] overflow-hidden relative">
        <div className="box-border w-[900px] h-[760px] absolute left-[calc(50%_-_1013.5px)] top-[664.52px] [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#aa92ec4d_0%,_#aa92ec00_100%)] bg-no-repeat bg-size-[100%_100%] [z-index:0]" />
        <div className="box-border w-[900px] h-[760px] absolute right-[calc(50%_-_1013.5px)] top-[664.52px] [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#f0aace3d_0%,_#f0aace00_100%)] bg-no-repeat bg-size-[100%_100%] [z-index:1]" />
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start relative [z-index:2]">
          <div className="box-border w-full h-fit shrink-0 flex flex-row gap-0 p-[16px_24px_0px_24px] justify-center items-center">
            <div className="box-border w-[1392px] shrink-0 h-fit flex flex-row gap-[24px] p-[12px_0px_12px_4px] justify-start items-center rounded-[999px] relative">
              <div className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-start items-center relative [z-index:0]">
                <a href="/" className="box-border w-[116.14px] shrink-0 h-[32px] relative block">
                  <div className="box-border w-[31.2px] h-[31.2px] [transform:rotate(-5deg)] [transform-origin:top_left] absolute left-[0.4px] top-[2.85px] [z-index:0]">
                    <div className="box-border w-[34.32px] h-[34.32px] absolute left-[-1.49px] top-[-0.85px] bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center [z-index:0]" />
                  </div>
                  <div className="text-[21px]/[21px] box-border absolute left-[41px] top-[5.5px] text-[#45434a] font-inter-variable font-normal tracking-[-0.8px] text-left [white-space:nowrap] [z-index:1]">whip</div>
                </a>
              </div>
              <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[29.99px] justify-center items-center relative [z-index:1]">
                <a href="#why" className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] text-left [white-space:nowrap]">Why Whip</a>
                <a href="#features" className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] text-left [white-space:nowrap]">Features</a>
                <a href="#possible" className="text-[14px]/[17px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-0.04px] text-left [white-space:nowrap]">What’s Possible</a>
              </div>
              <div className="box-border [flex:1_1_0] h-fit flex flex-row gap-0 justify-end items-center relative [z-index:2]">
                <a href="/waitlist" className="box-border w-fit shrink-0 h-fit flex flex-row gap-0 p-[11px_18px] justify-center items-center bg-[#2a2a27] rounded-[999px]">
                  <div className="text-[14px]/[17px] box-border text-[#ffffff] font-inter font-medium text-center [white-space:nowrap]">Join waitlist</div>
                </a>
              </div>
              <div className="box-border w-[1392px] h-[62.8px] absolute left-0 top-0 rounded-[999px] [z-index:3]" />
            </div>
          </div>
        </div>
        <div className="box-border w-[1440px] h-fit shrink-0 flex flex-col gap-0 justify-start items-center relative [z-index:3]">
          <div className="box-border w-[1040px] h-fit shrink-0 flex flex-col gap-0 p-[52px_24px_0px_24px] justify-start items-center overflow-hidden">
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start">
              <div className="text-[52px]/[53px] box-border w-full text-[#2a2a27] font-inter font-medium tracking-[-1.56px] text-center">
                <AgentRotator />
              </div>
            </div>
            <div className="box-border w-fit h-fit shrink-0 flex flex-col gap-0 p-[24px_0px_0px_0px] justify-start items-center overflow-hidden">
              <div className="box-border w-[620px] h-fit shrink-0 flex flex-col gap-0 justify-center items-center">
                <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 justify-start items-center">
                  <div className="text-[18px]/[28px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.14px] text-left [white-space:nowrap]">Whip is the</div>
                  <div className="box-border w-fit shrink-0 h-fit flex flex-row gap-[4px] p-[1px_2px] justify-start items-center bg-[#ffb00061] rounded-[4px]">
                    <div className="text-[18px]/[28px] box-border text-[#2a2a27] font-inter font-normal tracking-[-0.14px] text-left [white-space:nowrap]">agent super app</div>
                    <div className="box-border w-[13px] shrink-0 h-[13px] relative">
                      <svg viewBox="0 0 12 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[7.87px] h-[6.3px] absolute left-[2.4px] top-[3.15px] overflow-visible [z-index:0]">
                        <path d="M0 4l10 0m-4-4l4 4-4 4" fill="none" stroke="#2A2A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-[18px]/[28px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.14px] text-left [white-space:nowrap]">for vibe coding in macOS —</div>
                </div>
                <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-0 justify-start items-center">
                  <div className="text-[18px]/[28px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.14px] text-left [white-space:nowrap]">multi-pane terminal, on-device voice dictation, local-first.</div>
                </div>
              </div>
            </div>
            <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[20px] p-[36px_0px_0px_0px] justify-start items-center overflow-hidden">
              <a href="/waitlist" className="box-border w-fit shrink-0 h-[48px] flex flex-row gap-0 p-[0px_22px] justify-center items-center bg-[#2a2a27] rounded-[999px]">
                <div className="text-[15px]/[18px] box-border text-[#ffffff] font-inter-variable font-normal text-left [white-space:nowrap]">Join waitlist</div>
              </a>
              <a href="#features" className="box-border w-fit shrink-0 h-[48px] [backdrop-filter:blur(6px)] flex flex-row gap-[6px] p-[0px_18px_0px_22px] justify-center items-center bg-[#ffffffb3] rounded-[999px] relative">
                <div className="text-[15px]/[18px] box-border text-[#2a2a27] font-inter-variable font-normal text-left [white-space:nowrap] relative [z-index:0]">See what it can do</div>
                <div className="box-border w-[13px] shrink-0 h-[13px] overflow-hidden relative [z-index:1]">
                  <div className="box-border w-[13px] h-[13px] absolute left-0 top-0 overflow-hidden [z-index:0]">
                    <svg viewBox="0 0 7.5 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4.063px] h-[8.125px] absolute left-[4.875px] top-[2.438px] overflow-visible [z-index:0]">
                      <path d="M0 0l7.5 7.5-7.5 7.5 0-15z" fill="none" strokeWidth="1" />
                    </svg>
                    <svg viewBox="0 0 7.5 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[4.063px] h-[8.125px] absolute left-[4.875px] top-[2.438px] overflow-visible [z-index:1]">
                      <path d="M0 0l7.5 7.5-7.5 7.5" fill="none" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
                <div className="box-border w-[190.44px] h-[48px] absolute left-0 top-0 [border:1px_solid_#2a2a271a] rounded-[999px] [z-index:2]" />
              </a>
            </div>
          </div>
        </div>
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[52px_24px_72px_24px] justify-start items-center relative [z-index:4]">
          <div className="box-border w-fit h-fit shrink-0 [box-shadow:0px_1px_2px_#2a2a270d,_0px_14px_36px_#2a2a271a,_0px_40px_90px_#2a2a271a,_0px_0px_1px_#2a2a2712] flex flex-col gap-0 justify-start items-start bg-[#f7faf1] rounded-[10px] overflow-hidden relative">
            <div className="box-border w-[1120px] h-[586.84px] shrink-0 bg-[#f7faf1] flex flex-col gap-0 justify-start items-start relative [z-index:1]">
              <div className="box-border w-full h-[38px] shrink-0 flex flex-row gap-[8px] px-[14px] items-center bg-[#2a2a27]">
                <div className="box-border w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                <div className="box-border w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                <div className="box-border w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                <div className="text-[11px]/[14px] box-border font-geist-mono text-[#8a8880] pl-[10px]">whip — 3 panes</div>
              </div>
              <div className="box-border w-full h-[548.84px] shrink-0 flex flex-row gap-[1px] p-[1px] bg-[#e7e0d5]">
                <div className="box-border [flex:1_1_0] h-full flex flex-col gap-[6px] p-[14px] bg-[#1c1b19]">
                  <div className="text-[10px]/[14px] box-border font-geist-mono text-[#3aa676]">claude</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#d5d2ca]">$ claude</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">Refactor auth module,</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">isolate token handlers.</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#3aa676] pt-[6px]">✓ 4 files changed</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#3aa676]">✓ tests passing</div>
                </div>
                <div className="box-border [flex:1_1_0] h-full flex flex-col gap-[6px] p-[14px] bg-[#232220]">
                  <div className="text-[10px]/[14px] box-border font-geist-mono text-[#a98bf0]">codex</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#d5d2ca]">$ codex</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">Write test suite for</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">webhook failures.</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#3aa676] pt-[6px]">✓ 12 new tests</div>
                </div>
                <div className="box-border [flex:1_1_0] h-full flex flex-col gap-[6px] p-[14px] bg-[#1c1b19]">
                  <div className="text-[10px]/[14px] box-border font-geist-mono text-[#2b6cf5]">gemini</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#d5d2ca]">$ gemini</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">Update documentation</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#8a8880]">for /v2/orders endpoint.</div>
                  <div className="text-[11px]/[17px] box-border font-geist-mono text-[#3aa676] pt-[6px]">✓ README updated</div>
                </div>
              </div>
            </div>
            <div className="box-border w-[32px] h-[32px] absolute left-[1078px] top-[544.85px] bg-[#fafaf7f0] [border:1px_solid_#2a2a271f] rounded-[16px] [z-index:2]">
              <div className="box-border w-[12px] h-[12px] absolute left-[10px] top-[10px] overflow-hidden [z-index:0]">
                <div className="box-border w-[3px] h-[10px] absolute left-[2px] top-[1px] bg-[#2A2A27] rounded-[0.6px] [z-index:0]" />
                <div className="box-border w-[3px] h-[10px] absolute left-[7px] top-[1px] bg-[#2A2A27] rounded-[0.6px] [z-index:1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[4.5px] justify-start items-end">
        <div className="box-border w-[36px] shrink-0 h-[46.5px] relative">
          <div className="box-border w-[24.377px] h-[28.389px] absolute left-[9.18px] top-[7.868px] [z-index:0]">
            <svg viewBox="0 -2.6635825634002686e-7 24.030000686645508 27.129999427124858" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[24.03px] h-[27.13px] absolute left-0 top-[1.222px] overflow-visible [z-index:0]">
              <path d="M24.03 26.09l-1.58-0.69-1.51-0.71-1.46-0.73-1.39-0.75-1.33-0.76-1.28-0.79-1.21-0.81-1.15-0.82-1.09-0.84-1.04-0.86-0.97-0.87-0.91-0.89-0.85-0.91-0.79-0.93-0.73-0.94-0.67-0.96-0.62-0.97-0.55-0.99-0.5-1.01-0.44-1.02-0.38-1.04-0.33-1.06-0.27-1.07-0.21-1.09-0.16-1.11-0.1-1.13-0.04-1.14 0.01-1.17-2.48-0.03 0.04 1.29 0.1 1.26 0.17 1.24 0.22 1.22 0.29 1.19 0.35 1.18 0.4 1.15 0.47 1.12 0.53 1.1 0.59 1.08 0.65 1.05 0.7 1.03 0.77 1 0.82 0.98 0.88 0.96 0.94 0.93 1 0.9 1.05 0.88 1.11 0.86 1.16 0.83 1.23 0.82 1.27 0.79 1.34 0.76 1.39 0.75 1.45 0.72 1.51 0.7 1.56 0.68 1.62 0.66 0.42-1.04z" fill="#2A2A27" />
            </svg>
            <div className="box-border w-[1.114px] h-[1.114px] absolute left-[23.263px] top-[27.275px] bg-[#2A2A27] rounded-full [z-index:1]" />
            <div className="box-border w-[2.476px] h-[2.476px] absolute left-0 top-0 bg-[#2A2A27] rounded-full [z-index:2]" />
          </div>
          <svg viewBox="2.384185791015625e-7 0 7.259999990463257 8.180000305175781" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[7.26px] h-[8.18px] absolute left-[6.78px] top-[1.8px] overflow-visible [z-index:1]">
            <path d="M3.72 0l3.54 8.18-3.6-2.66-3.66 2.57 3.72-8.09z" fill="#2A2A27" />
          </svg>
        </div>
        <div className="box-border w-[159.05px] shrink-0 h-[20.98px] flex flex-row gap-0 p-[0px_0.01px_1.2px_0px] justify-start items-start">
          <div className="text-[15px]/[20px] box-border text-[#77756e] font-inter font-medium tracking-[-0.15px] text-left [white-space:nowrap]">Made with</div>
          <div className="box-border w-[4.5px] shrink-0 h-[1px]" />
          <div className="box-border w-[19.5px] shrink-0 h-[19.5px] bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center" />
          <div className="box-border w-[3px] shrink-0 h-[1px]" />
          <div className="text-[15px]/[20px] box-border text-[#2a2a27] font-inter font-semibold tracking-[-0.15px] text-left [white-space:nowrap]">Whip</div>
        </div>
      </div>
    </div>
  );
}
