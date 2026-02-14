"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterOne from "@/layouts/footers/footer-one";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import AgencySnapshot from "@/components/about/agency-snapshot";
import BrandFive from "@/components/brand/brand-five";
import AboutFaq from "@/components/about/about-faq";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <AboutUsHero />
            {/* about hero */}

            {/* about area */}
            <AboutUsArea />
            {/* about area */}

            {/* operational capacity (Agency Snapshot) */}
            <AgencySnapshot />
            {/* operational capacity */}

            {/* slogans area (Formerly BrandFive) */}
            <BrandFive />
            {/* slogans area */}

            {/* FAQ Area */}
            <AboutFaq />
            {/* FAQ Area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
