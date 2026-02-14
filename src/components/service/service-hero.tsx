import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

import { useTranslations } from "next-intl";

export default function ServiceHero() {
  const t = useTranslations('ServicesPage');
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation" dangerouslySetInnerHTML={{ __html: t('hero_title') }}>
              </h4>
              <p className="tp_fade_bottom" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '800px' }}>
                {t('hero_desc')}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src="/assets/images/other/images (3)-2476x1651.jpg"
                  alt="ser_hero-img"
                  width={1530}
                  height={800}
                  style={{ height: "auto", objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
