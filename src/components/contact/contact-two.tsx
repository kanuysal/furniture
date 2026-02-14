import React from "react";
import Image from "next/image";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";
import { useTheme } from "next-themes";

import { useTranslations } from "next-intl";

export default function ContactTwo() {
  const t = useTranslations('Contact');
  const tNav = useTranslations('Navigation');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span style={{ color: isDark ? '#fff' : 'inherit' }}>{tNav('follow_us')}</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h2 className="mb-30" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '48px', color: isDark ? '#fff' : '#000' }}>
                <span dangerouslySetInnerHTML={{ __html: t('form_title') }} />
              </h2>
              <p className="mb-20" style={{ fontSize: '18px', lineHeight: '1.6', color: isDark ? '#ccc' : '#444' }}>
                {t('form_desc1')}
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: isDark ? '#ccc' : '#444' }}>
                {t('form_desc2')}
              </p>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
