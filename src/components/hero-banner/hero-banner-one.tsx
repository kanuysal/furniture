'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";


import { useTranslations } from "next-intl";

const HeroBannerOne = () => {
  const t = useTranslations('Hero');
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  useGSAP(() => {

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1">
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={790}
                  height={700}
                  style={{ width: "100%", height: "auto", maxWidth: "790px" }}
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative">
                <span className="tp-hero-subtitle tp_fade_bottom" style={{
                  position: 'absolute',
                  left: '20px',
                  top: '150px',
                  transform: 'rotate(90deg)',
                  transformOrigin: 'left top',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  fontWeight: 500,
                  opacity: 0.6,
                  zIndex: 20,
                  whiteSpace: 'nowrap',
                  color: '#fff'
                }}>
                  <span dangerouslySetInnerHTML={{ __html: t('subtitle').replace('<br />', ' ').replace('<br />', ' ') }} />
                </span>
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    {t('title_part1')}
                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <Image
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        alt="shape"
                        width={40}
                        height={40}
                      />
                    </span>
                  </span>
                  <br />
                  {t('title_part2')}
                  <span className="tp-hero-title-img">
                    <Image
                      className="tp-zoom-img"
                      src="/assets/images/masif/masif-11-2016x1344.jpg"
                      alt="hero-img"
                      width={270}
                      height={160}
                      style={{ width: "100%", height: "auto", maxWidth: "270px", borderRadius: '80px' }}
                    />
                  </span>
                  {t('title_part3')}
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                {t('desc')}
              </p>
            </div>

            <div className="tp-hero-bottom-img-wrap tp_fade_bottom mt-50 mb-50" style={{ width: '100%', maxWidth: '100%' }}>
              <div className="tp-hero-bottom-img" style={{ borderRadius: '10px', overflow: 'hidden', width: '100%' }}>
                <video
                  onEnded={() => {
                    const next = (currentVideoIndex + 1) % 5;
                    setCurrentVideoIndex(next);
                  }}
                  src={`/assets/videos/mob${currentVideoIndex + 1}.mp4`}
                  playsInline
                  muted
                  autoPlay
                  loop={false}
                  ref={(el) => {
                    if (el) {
                      el.playbackRate = 1.0;
                      const playPromise = el.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(() => { });
                      }
                    }
                  }}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
