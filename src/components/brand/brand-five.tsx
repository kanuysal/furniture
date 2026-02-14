import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

// images (kept for reference or future use if needed, though mostly text based now)
import b_1 from "@/assets/img/inner-about/brand/brand-1.png";
import b_2 from "@/assets/img/inner-about/brand/brand-2.png";
import b_3 from "@/assets/img/inner-about/brand/brand-3.png";
import b_4 from "@/assets/img/inner-about/brand/brand-4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand-2.png";

export default function BrandFive() {
  const t = useTranslations('BrandSection');

  const slogans = [
    { text: t('slogan1'), font: 'var(--tp-ff-gallery)' },
    { text: t('slogan2'), font: 'inherit' },
    { text: t('slogan3'), font: 'var(--tp-ff-gallery)' },
    { text: t('slogan4'), font: 'inherit' },
    { text: t('slogan5'), font: 'var(--tp-ff-gallery)' },
    { text: t('slogan6'), font: 'inherit' },
  ];

  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title" style={{ fontFamily: 'var(--tp-ff-gallery)' }}>{t('title')}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={80} loop={0} className="ab-brand-slide-wrap">
                  {slogans.map((s, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                      style={{ marginRight: '80px' }}
                    >
                      <span style={{
                        fontFamily: s.font,
                        fontSize: '40px',
                        color: '#fff',
                        whiteSpace: 'nowrap',
                        opacity: 0.8
                      }}>{s.text}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <div className="ab-brand-content tp_title_anim">
              <p style={{ fontSize: '20px', color: '#ccc' }}>
                {t('desc')}
              </p>
              <Link href="/contact" style={{
                color: '#fff',
                textDecoration: 'underline',
                fontSize: '18px',
                fontFamily: 'var(--tp-ff-gallery)'
              }}>{t('btn')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
