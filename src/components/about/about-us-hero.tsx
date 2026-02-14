import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function AboutUsHero() {
  const t = useTranslations('AboutHero');
  const [videoIndex, setVideoIndex] = React.useState(0);
  const videoRefs = [
    "/assets/videos/mob1.mp4",
    "/assets/videos/mob2.mp4",
    "/assets/videos/mob3.mp4",
    "/assets/videos/mob4.mp4",
    "/assets/videos/mob5.mp4"
  ];

  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoRefs.length);
  };

  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="ab-inner-hero-area ab-inner-hero-bg p-relative overflow-hidden" style={{ height: '100vh', minHeight: '800px' }}>
      {/* Video Background Layer */}
      <div className="video-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          key={videoIndex}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={videoRefs[videoIndex]} type="video/mp4" />
        </video>
        {/* subtle overlay to soften the video if needed, but keeping it light for difference mode */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 1 }}></div>
      </div>

      <div className="ab-inner-hero-scroll smooth" style={{ zIndex: 3 }}>
        <a className="pointer" onClick={scrollTo}>
          <span style={{ color: '#fff', mixBlendMode: 'difference' }}>
            {t('scroll')}
            <ScrollDown />
          </span>
        </a>
      </div>

      <div className="container container-1480" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="row w-100">
          <div className="col-xl-12">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
              style={{ mixBlendMode: 'difference' }}
            >
              <span className="ab-inner-hero-subtitle" style={{ color: '#fff', fontSize: '18px', letterSpacing: '4px' }} dangerouslySetInnerHTML={{ __html: t.raw('subtitle') }}>
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation" style={{
                fontFamily: 'var(--tp-ff-gallery)',
                color: '#fff',
                fontSize: 'clamp(60px, 10vw, 120px)',
                lineHeight: '0.9',
                marginTop: '20px',
                marginBottom: '20px'
              }} dangerouslySetInnerHTML={{ __html: t.raw('title') }}>
              </h1>
              <p style={{ color: '#fff', fontSize: '22px', maxWidth: '700px', lineHeight: '1.4', fontWeight: '500' }}>
                {t('desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
