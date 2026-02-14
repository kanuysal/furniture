import React from "react";
import { Leaf } from "../svg";
import { useTheme } from "next-themes";

// brand slogans data
const brand_slogan_data = [
  {
    id: 1,
    slogan: "Industrial Engineering",
    sub: "Precision-Driven",
    hover: "Applying optimization principles to every stage of production."
  },
  {
    id: 2,
    slogan: "UPV Alumni",
    sub: "European Standards",
    hover: "Merging Spanish design expectations with Turkish power."
  },
  {
    id: 3,
    slogan: "İnegöl Native",
    sub: "Local Power",
    hover: "Direct access to the heart of the furniture manufacturing world."
  },
  {
    id: 4,
    slogan: "Real-Time QC",
    sub: "Zero Failure",
    hover: "Constant monitoring to ensure flawless execution before shipment."
  },
  {
    id: 5,
    slogan: "Logistics Algorithm",
    sub: "Legal Clearance",
    hover: "Complex documentation handled with mathematical efficiency."
  },
  {
    id: 6,
    slogan: "Door-to-Door",
    sub: "DDP Delivery",
    hover: "Delivered tax-paid, just like a local purchase in Spain."
  },
  {
    id: 7,
    slogan: "CAD to Factory",
    sub: "Technical Optimization",
    hover: "Translating your technical drawings into perfect products."
  },
  {
    id: 8,
    slogan: "100% Transparency",
    sub: "Full Control",
    hover: "Weekly video reports to keep you always in the loop."
  },
];

export function BrandSloganItems() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {brand_slogan_data.map((item) => (
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
                Strategic Foundation
              </span>
              <h4 className="tp-section-title-40 font-style-2" style={{ color: isDark ? '#fff' : '#000' }}>
                Engineering excellence at every stage of the procurement cycle.
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
