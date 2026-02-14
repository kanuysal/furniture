import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

const ServiceOne = () => {
  const t = useTranslations('Services');

  // service data
  const service_data = [
    {
      id: 1,
      title: t('item1_title'),
      desc: t('item1_desc'),
      icon: s_1,
    },
    {
      id: 2,
      title: t('item2_title'),
      desc: t('item2_desc'),
      icon: s_2,
    },
    {
      id: 3,
      title: t('item3_title'),
      desc: t('item3_desc'),
      icon: s_3,
    },
    {
      id: 4,
      title: t('item4_title'),
      desc: t('item4_desc'),
      icon: s_4,
    },
  ];

  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp-char-animation">{t('title_subtitle')}</span>
              <h4 className="tp-section-title tp-char-animation">
                {t('title_part1')}<br />
                <span>{t('title_part2')}</span>
              </h4>
            </div>

            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">{t('see_all')}</span>
                  <span className="text-2">{t('see_all')}</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="/service">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
