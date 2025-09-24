"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "highlight" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How To Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          logoSrc="/images/logo.svg"
          brandName="NovaFlow"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero title="Welcome to NovaFlow" description="Your seamless platform for automation and collaboration!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="NovaFlow helps teams automate workflows and collaborate in real time to achieve seamless operations and increased productivity." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant='simple' />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics title="Tokenomics Overview" description="Explore our tokenomics structure and future plans." kpiItems={[{ value: '1M', description: 'Total Supply', longDescription: 'Total supply of tokens created.', icon: `` }, { value: '100K', description: 'Tokens Held', longDescription: 'Number of tokens held by community.', icon: `` }, { value: '500K', description: 'Tokens Circulated', longDescription: 'Tokens currently in circulation.', icon: `` }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={100}
          columns={[
            { title: 'About', items: [{ label: 'Company', onClick: () => {} }, { label: 'Careers', onClick: () => {} }] },
            { title: 'Services', items: [{ label: 'Consulting', onClick: () => {} }, { label: 'Development', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Contact', onClick: () => {} }, { label: 'FAQ', onClick: () => {} }], },
          ]}
          copyrightText="© 2023 NovaFlow. All Rights Reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
