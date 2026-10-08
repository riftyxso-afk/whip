export function FinalCta() {
  return (
    <div className="box-border w-full max-w-[1240px] h-fit shrink-0 flex flex-col gap-[26px] py-20 px-6 md:p-[190px_40px_170px_40px] justify-start items-center">
      <div className="box-border w-[90px] h-[90px] md:w-[104px] md:h-[104px] shrink-0 relative">
        <div className="box-border w-full h-full absolute left-0 top-0 bg-[url('/images/whip/whip_logo.png')] bg-no-repeat bg-contain bg-center [z-index:0]" />
      </div>
      <div className="text-[32px]/[36px] sm:text-[44px]/[48px] md:text-[56px]/[58px] box-border w-full text-[#2a2a27] font-inter-variable font-normal tracking-[-1.68px] text-center">Crack the whip on your AI agents.</div>
      <a href="/waitlist" className="box-border w-full sm:w-fit h-fit flex flex-row gap-0 p-[17px_30px] justify-center items-center bg-[#2a2a27] rounded-[12px] hover:bg-[#3d3b37] transition-colors cursor-pointer">
        <div className="text-[17px]/[21px] md:text-[19px]/[23px] box-border text-[#ffffff] font-inter font-medium text-center [white-space:nowrap]">Join the waitlist</div>
      </a>
      <div className="text-[14px]/[19px] md:text-[15px]/[20px] box-border w-full text-[#8a8880] font-inter-variable font-normal text-center">The native Agent Super App for builders who ship.</div>
    </div>
  );
}
