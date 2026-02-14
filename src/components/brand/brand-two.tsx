import React from "react";
import { Leaf } from "../svg";
import { useTheme } from "next-themes";

// brand slogans data
import { useTranslations } from "next-intl";

export function BrandSloganItems() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const t = useTranslations('ServicesPage');

  const brand_slogan_items = [
    { id: 1, slogan: t('foundation.item1_title'), sub: t('foundation.item1_sub'), hover: t('foundation.item1_hover') },
    { id: 2, slogan: t('foundation.item2_title'), sub: t('foundation.item2_sub'), hover: t('foundation.item2_hover') },
    { id: 3, slogan: t('foundation.item3_title'), sub: t('foundation.item3_sub'), hover: t('foundation.item3_hover') },
    { id: 4, slogan: t('foundation.item4_title'), sub: t('foundation.item4_sub'), hover: t('foundation.item4_hover') },
    { id: 5, slogan: t('foundation.item5_title'), sub: t('foundation.item5_sub'), hover: t('foundation.item5_hover') },
    { id: 6, slogan: t('foundation.item6_title'), sub: t('foundation.item6_sub'), hover: t('foundation.item6_hover') },
    { id: 7, slogan: t('foundation.item7_title'), sub: t('foundation.item7_sub'), hover: t('foundation.item7_hover') },
    { id: 8, slogan: t('foundation.item8_title'), sub: t('foundation.item8_sub'), hover: t('foundation.item8_hover') },
  ];

  return (
    <>
      {brand_slogan_items.map((item) => (
        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-40">
          <div className="tp-brand-4-item p-relative h-100 d-flex flex-column justify-content-center p-4 border"
            style={{
              minHeight: '200px',
              backgroundColor: isDark ? '#1a1a1a' : '#fcfcfc',
              borderColor: isDark ? '#333' : '#eee',
              color: isDark ? '#fff' : '#000'
            }}>
            <h5 className="mb-2" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '24px', color: 'inherit' }}>{item.slogan}</h5>
            <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: isDark ? '#aaa' : '#777' }}>{item.sub}</span>
            <div className="tp-brand-4-line-text d-flex align-items-center opacity-0 hover-opacity-100 transition-3"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: isDark ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)',
                color: isDark ? '#000' : '#fff',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                zIndex: 2,
                pointerEvents: 'none'
              }}>
              <p className="m-0" style={{ fontSize: '16px', lineHeight: '1.4' }}>{item.hover}</p>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .tp-brand-4-item:hover .tp-brand-4-line-text {
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `}</style>
    </>
  );
}

const BrandTwo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const t = useTranslations('ServicesPage');

  return (
    <div
      className="tp-brand-4-area mt-20 pt-120 pb-120 grey-bg-3"
      style={{ backgroundColor: isDark ? '#111' : '#f3f3f3' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-4-title-box tp_fade_bottom mb-65">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                {t('foundation_title')}
              </span>
              <h4 className="tp-section-title-40 font-style-2" style={{ color: isDark ? '#fff' : '#000' }}>
                {t('foundation_desc')}
              </h4>
            </div>
          </div>
        </div>
        <div className="row gx-4">
          <BrandSloganItems />
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
