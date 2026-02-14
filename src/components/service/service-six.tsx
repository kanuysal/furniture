import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function ServiceSix() {
  const t = useTranslations('ServicesPage');

  const service_items = [
    {
      id: 1,
      img: "/assets/images/other/images (12)-1500x999.jpg",
      subtitle: t('protocol.phase1_subtitle'),
      title: t('protocol.phase1_title'),
      text: t('protocol.phase1_desc'),
      lists: [
        t('protocol.phase1_list.0'),
        t('protocol.phase1_list.1'),
        t('protocol.phase1_list.2'),
        t('protocol.phase1_list.3'),
      ],
    },
    {
      id: 2,
      img: "/assets/images/other/images (14)-2016x1344.jpg",
      subtitle: t('protocol.phase2_subtitle'),
      title: t('protocol.phase2_title'),
      text: t('protocol.phase2_desc'),
      lists: [
        t('protocol.phase2_list.0'),
        t('protocol.phase2_list.1'),
        t('protocol.phase2_list.2'),
        t('protocol.phase2_list.3'),
      ],
    },
    {
      id: 3,
      img: "/assets/images/other/images (1)-2100x840.jpg",
      subtitle: t('protocol.phase3_subtitle'),
      title: t('protocol.phase3_title'),
      text: t('protocol.phase3_desc'),
      lists: [
        t('protocol.phase3_list.0'),
        t('protocol.phase3_list.1'),
        t('protocol.phase3_list.2'),
        t('protocol.phase3_list.3'),
      ],
    },
    {
      id: 4,
      img: "/assets/images/other/images (7)-2016x1344.jpg",
      subtitle: t('protocol.phase4_subtitle'),
      title: t('protocol.phase4_title'),
      text: t('protocol.phase4_desc'),
      lists: [
        t('protocol.phase4_list.0'),
        t('protocol.phase4_list.1'),
        t('protocol.phase4_list.2'),
        t('protocol.phase4_list.3'),
      ],
    },
  ];

  const contact_text = useTranslations('CTA')('btn');

  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_items.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    width={1200}
                    height={800}
                    style={{ height: "auto", objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/contact"
                        >
                          <span className="zikzak-content">
                            {contact_text}
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
