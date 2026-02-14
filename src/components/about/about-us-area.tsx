import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUsArea() {
  const t = useTranslations('About');
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5 pt-120">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src="/assets/images/other/images (12)-1500x999.jpg"
                  alt="Furniture DNA"
                  width={1500}
                  height={1000}
                  style={{ height: "auto", borderRadius: '4px' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src="/assets/images/other/images (14)-2016x1344.jpg"
                  alt="Process"
                  width={1000}
                  height={1300}
                  style={{ height: "auto", borderRadius: '4px' }}
                />
                <Image
                  data-speed="0.9"
                  src="/assets/images/sofa/sofa-3-1934x1289.jpg"
                  alt="Product"
                  width={800}
                  height={1000}
                  style={{ height: "auto", borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative mb-60">
              <h2 className="tp-dropcap tp_fade_bottom" style={{ fontFamily: 'var(--tp-ff-gallery)', wordSpacing: '5px' }}>
                {t('title')}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-40">
                <p className="tp_fade_bottom" style={{ fontSize: '20px', lineHeight: '1.8' }}>
                  {t('para1')}
                </p>
              </div>
              <div className="col-xl-6 col-lg-6">
                <p className="tp_fade_bottom" style={{ fontSize: '20px', lineHeight: '1.8' }}>
                  {t('para2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
