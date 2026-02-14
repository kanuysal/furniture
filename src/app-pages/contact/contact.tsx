"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import FooterOne from "@/layouts/footers/footer-one";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";

import { useTranslations } from "next-intl";

const ContactMain = () => {
  const t = useTranslations('Contact');
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
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
          <div
            className="inner-bg"
            style={{
              backgroundColor: '#000'
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative overflow-hidden" style={{ backgroundImage: 'url(/assets/images/other/images (1)-2100x840.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content text-center">
                        <span className="tm-hero-subtitle" style={{ color: '#fff', fontSize: '18px', letterSpacing: '4px' }}>{t('hero_subtitle')}</span>
                        <h4 className="tm-hero-title-big tp-char-animation" style={{ fontFamily: 'var(--tp-ff-gallery)', color: '#fff', fontSize: '80px', marginTop: '20px' }}>
                          <span dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <div className="pt-120 pb-100">
                <ContactTwo />
              </div>
              {/* contact area */}

              {/* contact location */}
              <ContactLocation />
              {/* contact location */}
            </main>

            {/* footer area */}
            <FooterOne />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
