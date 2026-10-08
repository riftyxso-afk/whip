export function SiteFooter() {
  return (
    <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[28px] p-[40px_60px_56px_60px] justify-start items-center bg-[#ffffff]">
      <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[1004.16px] justify-start items-start">
        <div className="box-border w-fit shrink-0 h-[150.78px] flex flex-col gap-[8.9px] justify-start items-start">
          <div className="text-[14px]/[17px] box-border text-[#2a2a27] font-geist-mono-variable font-normal tracking-[0.84px] text-left [white-space:nowrap]">PAGES</div>
          <a href="#why" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px] text-left [white-space:nowrap]">WHY WHIP</a>
          <a href="#features" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px] text-left [white-space:nowrap]">FEATURES</a>
          <a href="#guides" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono font-normal tracking-[0.84px] text-left [white-space:nowrap]">GUIDES</a>
          <a href="#workflows" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono font-normal tracking-[0.84px] text-left [white-space:nowrap]">AGENT WORKFLOWS</a>
          <a href="/waitlist" className="text-[14px]/[17px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.84px] text-left [white-space:nowrap]">JOIN WAITLIST</a>
        </div>
        <div className="box-border w-[88px] shrink-0 h-[88px] relative">
          <div className="box-border w-[88px] h-[88px] absolute left-0 top-0 bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center [z-index:0]" />
        </div>
      </div>
      <div className="box-border w-[1240px] h-[1px] shrink-0 bg-[#eae8e1]" />
      <div className="box-border w-[1240px] h-[14.41px] shrink-0 flex flex-row gap-[24px] justify-start items-start">
        <div className="text-[12px]/[14px] box-border text-[#2a2a27] font-geist-mono-variable font-normal tracking-[0.72px] text-left [white-space:nowrap]">WHIP © 2026</div>
        <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono font-normal tracking-[0.72px] text-left [white-space:nowrap]">PRIVACY</div>
        <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono font-normal tracking-[0.72px] text-left [white-space:nowrap]">TERMS</div>
        <div className="text-[12px]/[14px] box-border text-[#8a8880] font-geist-mono-variable font-normal tracking-[0.72px] text-left [white-space:nowrap]">THE AGENT SUPER APP FOR MACOS</div>
      </div>
    </div>
  );
}
