export function AboutTheMaker() {
  return (
    <div className="box-border w-full max-w-[1240px] h-fit shrink-0 flex flex-col gap-0 px-4 sm:px-8 md:px-12 py-10 justify-start items-center">
      <div className="box-border w-full max-w-[1120px] h-fit shrink-0 [box-shadow:0px_30px_80px_#2a2a270f,_0px_2px_6px_#2a2a2708] [border:1px_solid_#eae8e1] flex flex-col lg:flex-row gap-[36px] lg:gap-[48px] p-6 sm:p-10 lg:p-[72px_64px_72px_80px] justify-start items-center bg-[#ffffff] rounded-[28px] relative">
        <div className="box-border w-full lg:[flex:1_1_0] h-fit flex flex-col gap-[22px] justify-start items-start relative [z-index:0]">
          <div className="text-[36px]/[40px] sm:text-[46px]/[50px] lg:text-[56px]/[58px] box-border text-[#2a2a27] font-inter-variable font-normal tracking-[-1.68px] text-left">Hi, I’m Radea 👋</div>
          <div className="box-border w-full h-fit flex flex-col gap-[18px] justify-start items-start">
            <div className="text-[17px]/[26px] sm:text-[20px]/[30px] lg:text-[22px]/[32px] box-border w-full h-fit text-[#8a8880] font-inter-variable font-normal tracking-[-0.26px] text-left">I build software every day directing multiple AI coding agents. The biggest bottleneck was never the AI itself, but the constant alt-tabbing between terminals, chat interfaces, and project windows.</div>
            <div className="text-[17px]/[26px] sm:text-[20px]/[30px] lg:text-[22px]/[32px] box-border w-full h-fit text-[#8a8880] font-inter-variable font-normal tracking-[-0.26px] text-left">I built Whip to solve my own daily friction: one unified native workspace where agents run side-by-side, voice dictation feels effortless, and context is never lost.</div>
          </div>
          <a href="/waitlist" className="box-border w-fit h-[47.8px] shrink-0 flex flex-row gap-0 p-[12px_20px_12px_22px] justify-center items-center bg-[#ffffffb8] rounded-[999px] relative hover:bg-[#ffffff] transition-colors">
            <div className="text-[17px]/[24px] box-border text-[#2a2a27] font-inter font-medium tracking-[-0.14px] text-center [white-space:nowrap] relative [z-index:0]">Why I built Whip →</div>
            <div className="box-border w-full h-[47.8px] absolute left-0 top-0 [border:1px_solid_#eae8e1] rounded-[999px] [z-index:1]" />
          </a>
          <div className="box-border w-fit h-fit shrink-0 flex flex-row gap-[14px] pt-[8px] justify-start items-center">
            <div className="box-border w-[52px] shrink-0 h-[52px] rounded-[100px] overflow-hidden relative">
              <div className="box-border w-fit h-fit absolute left-0 top-0 flex flex-col gap-0 justify-start items-start rounded-[100px] [z-index:0]">
                <div className="box-border w-[52px] h-[52px] shrink-0 bg-[#e7e0d5] rounded-[100px] flex items-center justify-center">
                  <span className="text-[20px]/[20px] font-inter font-medium text-[#2a2a27]">R</span>
                </div>
              </div>
            </div>
            <div className="box-border w-fit shrink-0 h-[43.59px] flex flex-col gap-[2.01px] justify-start items-start">
              <div className="text-[17px]/[22px] box-border text-[#2a2a27] font-inter font-medium tracking-[-0.2px] text-left [white-space:nowrap]">Radea</div>
              <div className="text-[15px]/[20px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.07px] text-left [white-space:nowrap]">Creator of Whip</div>
            </div>
          </div>
        </div>
        <div className="box-border w-full lg:w-[450px] shrink-0 h-fit flex flex-col gap-[22px] justify-start items-center relative [z-index:1]">
          <div className="box-border w-full max-w-[380px] h-[280px] sm:h-[340px] shrink-0 relative flex items-center justify-center">
            {/* Project 1: Portalink */}
            <div className="box-border w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] [transform:rotate(-10deg)] [transform-origin:center] [box-shadow:0px_14px_30px_#2a2a272e,_0px_2px_6px_#2a2a271a] absolute left-[15px] sm:left-[35px] top-[50px] sm:top-[75px] rounded-[30px] sm:rounded-[36px] overflow-hidden [z-index:1]">
              <div className="box-border w-full h-full bg-[url('/images/whip/portalink.png')] bg-no-repeat bg-cover bg-center rounded-[30px] sm:rounded-[36px]" />
            </div>
            {/* Project 2: Nguci */}
            <div className="box-border w-[120px] h-[120px] sm:w-[145px] sm:h-[145px] [transform:rotate(8deg)] [transform-origin:center] [box-shadow:0px_14px_30px_#2a2a272e,_0px_2px_6px_#2a2a271a] absolute right-[15px] sm:right-[35px] top-[40px] sm:top-[65px] rounded-[30px] sm:rounded-[36px] overflow-hidden [z-index:2]">
              <div className="box-border w-full h-full bg-[url('/images/whip/nguci_icon.png')] bg-no-repeat bg-cover bg-center rounded-[30px] sm:rounded-[36px]" />
            </div>
            {/* Project 3: Whip */}
            <div className="box-border w-[135px] h-[135px] sm:w-[165px] sm:h-[165px] [transform:rotate(-2deg)] [transform-origin:center] [box-shadow:0px_18px_40px_#2a2a273d,_0px_3px_8px_#2a2a2724] absolute left-[125px] sm:left-[142px] top-[65px] sm:top-[90px] rounded-[34px] sm:rounded-[42px] overflow-hidden [z-index:3]">
              <div className="box-border w-full h-full bg-[url('/images/whip/whip_icon_tight.png')] bg-no-repeat bg-cover bg-center rounded-[34px] sm:rounded-[42px]" />
            </div>
          </div>
          <div className="text-[15px]/[20px] box-border text-[#8a8880] font-inter font-normal tracking-[-0.07px] text-center [white-space:nowrap]">Portalink, Nguci, and now Whip.</div>
        </div>
      </div>
    </div>
  );
}
