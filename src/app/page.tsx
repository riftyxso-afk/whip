import { SiteHero } from '@/components/sections/SiteHero';
import { WorksWithYourAgent } from '@/components/sections/WorksWithYourAgent';
import { OnePromptEveryAsset } from '@/components/sections/OnePromptEveryAsset';
import { AskForShots } from '@/components/sections/AskForShots';
import { CantThisJustBeASkill } from '@/components/sections/CantThisJustBeASkill';
import { WhatMakesMoonjarDifferent } from '@/components/sections/WhatMakesMoonjarDifferent';
import { FairQuestions } from '@/components/sections/FairQuestions';
import { AboutTheMaker } from '@/components/sections/AboutTheMaker';
import { FinalCta } from '@/components/sections/FinalCta';
import { SiteFooter } from '@/components/sections/SiteFooter';

export default function Home() {
  return (
    <div className="box-border w-full min-h-screen flex flex-col gap-0 justify-start items-center bg-[#fafaf7] overflow-x-hidden">
      <SiteHero />
      <WorksWithYourAgent />
      <div id="possible" className="w-full flex justify-center">
        <OnePromptEveryAsset />
      </div>
      <div id="features" className="w-full flex justify-center">
        <AskForShots />
      </div>
      <CantThisJustBeASkill />
      <div id="why" className="w-full flex justify-center">
        <WhatMakesMoonjarDifferent />
      </div>
      <FairQuestions />
      <AboutTheMaker />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}
