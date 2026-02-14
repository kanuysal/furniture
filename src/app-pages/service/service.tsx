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
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandSloganItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import { Leaf, RightArrow, ShapeTwo } from "@/components/svg";
import FooterOne from "@/layouts/footers/footer-one";
import Image from "next/image";
import Link from "next/link";
// animation
import { useTheme } from "next-themes";
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";

const ServiceMain = () => {
  useScrollSmooth();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service hero */}
            <ServiceHero />
            {/* service hero */}

            {/* methodology area */}
            <div className="ab-about-area pt-120 pb-120">
              <div className="container container-1480">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="ab-about-left-thumb tp_fade_left">
                      <Image
                        src="/assets/images/other/images (13)-1800x1200.jpg"
                        alt="Methodology"
                        width={800}
                        height={1000}
                        style={{ height: "auto", borderRadius: '4px' }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="ab-about-content pl-80 tp_fade_right">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        The Methodology
                      </span>
                      <h4 className="tp-service-5-title mb-30" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '48px', color: isDark ? '#fff' : '#000' }}>
                        The Engineer’s Eye on <br /> Turkish Craftsmanship
                      </h4>
                      <p className="mb-30" style={{ fontSize: '18px', lineHeight: '1.8', color: isDark ? '#ccc' : '#444' }}>
                        "Sourcing furniture internationally often comes with risks: quality variation, delays, and communication gaps. At Mina Design, we eliminate these variables using Industrial Engineering principles.
                      </p>
                      <p style={{ fontSize: '18px', lineHeight: '1.8', color: isDark ? '#ccc' : '#444' }}>
                        Founded by a UPV (Universitat Politècnica de València) Alumni and Native of İnegöl—the furniture capital of Turkiye—our agency bridges two worlds. We combine European technical standards with Anatolian manufacturing power. Every project is treated as an engineering operation, optimized for cost, quality, and lead time."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* methodology area */}

            {/* service area (4-Step Protocol) */}
            <div className="tp-service-5-area pb-90">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12 text-center mb-60">
                    <span className="ab-inner-subtitle mb-20 justify-content-center">
                      <Leaf />
                      The Protocol
                    </span>
                    <h2 style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '60px', color: isDark ? '#fff' : '#000' }}>Our 4-Step Technical Protocol</h2>
                  </div>
                </div>
              </div>
              <ServiceSix />
            </div>
            {/* service area */}

            {/* quality assurance area */}
            <div className="tp-faq-area pt-120 pb-120 grey-bg-3" style={{ backgroundColor: isDark ? '#111' : '#f3f3f3' }}>
              <div className="container container-1480">
                <div className="row">
                  <div className="col-xl-5 col-lg-6">
                    <div className="tp-faq-title-box">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Quality Assurance
                      </span>
                      <h4 className="tp-section-title tp-char-animation" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '45px', color: isDark ? '#fff' : '#000' }}>
                        Our Control Mechanisms
                      </h4>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="tp-faq-content pl-70">
                      <div className="tp-faq-list">
                        <ul>
                          <li className="mb-20 d-flex align-items-start tp_fade_bottom">
                            <span className="mr-20" style={{ color: isDark ? '#fff' : '#000', fontSize: '24px' }}>✓</span>
                            <div style={{ color: isDark ? '#ccc' : '#444' }}>
                              <strong style={{ color: isDark ? '#fff' : '#000' }}>Raw Material Inspection:</strong>
                              <p>Wood moisture levels, Fabric durability tests, and foam density verification.</p>
                            </div>
                          </li>
                          <li className="mb-20 d-flex align-items-start tp_fade_bottom">
                            <span className="mr-20" style={{ color: isDark ? '#fff' : '#000', fontSize: '24px' }}>✓</span>
                            <div style={{ color: isDark ? '#ccc' : '#444' }}>
                              <strong style={{ color: isDark ? '#fff' : '#000' }}>In-Line Production Audits:</strong>
                              <p>Skeleton & Joinery checks at every stage of assembly.</p>
                            </div>
                          </li>
                          <li className="mb-20 d-flex align-items-start tp_fade_bottom">
                            <span className="mr-20" style={{ color: isDark ? '#fff' : '#000', fontSize: '24px' }}>✓</span>
                            <div style={{ color: isDark ? '#ccc' : '#444' }}>
                              <strong style={{ color: isDark ? '#fff' : '#000' }}>Final Pre-Shipment Inspection (PSI):</strong>
                              <p>Strict packaging verification and final aesthetic audit before loading.</p>
                            </div>
                          </li>
                          <li className="mb-20 d-flex align-items-start tp_fade_bottom">
                            <span className="mr-20" style={{ color: isDark ? '#fff' : '#000', fontSize: '24px' }}>✓</span>
                            <div style={{ color: isDark ? '#ccc' : '#444' }}>
                              <strong style={{ color: isDark ? '#fff' : '#000' }}>100% Transparency:</strong>
                              <p>If a defect is found, it is fixed before it leaves the factory. Weekly reports included.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* quality assurance area */}

            {/* brand area (Strategic Slogans) */}
            <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 text-center mb-60">
                    <h4 style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '30px', color: isDark ? '#fff' : '#000' }}>Strategic Foundation</h4>
                  </div>
                </div>
                <div className="row gx-4">
                  <BrandSloganItems />
                </div>
              </div>
            </div>
            {/* brand area */}

            {/* CTA section */}
            <div className="tp-cta-area pt-120 pb-120 black-bg text-center p-relative overflow-hidden">
              <div className="container">
                <h2 className="mb-50" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '60px', color: '#fff' }}>
                  Ready to optimize your procurement?
                </h2>
                <Link
                  className="tp-btn-zikzak zikzak-inner p-relative mx-auto"
                  href="/contact"
                >
                  <span className="zikzak-content">
                    YES
                    <RightArrow clr="currentColor" />
                  </span>
                  <ShapeTwo />
                </Link>
              </div>
            </div>

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
