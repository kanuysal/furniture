"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/brand-1.png";
import b_2 from "@/assets/img/home-01/brand/brand-2.png";
import b_3 from "@/assets/img/home-01/brand/brand-3.png";
import b_4 from "@/assets/img/home-01/brand/brand-4.png";
import b_5 from "@/assets/img/home-01/brand/brand-5.png";
import b_6 from "@/assets/img/home-01/brand/brand-6.png";
import b_7 from "@/assets/img/home-01/brand/brand-7.png";
import b_8 from "@/assets/img/home-01/brand/brand-2.png";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8, b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        autoFill={true}
        className="brand-wrapper"
      >
        <div className="tp-brand-item" style={{ display: 'flex', alignItems: 'center', gap: '80px', paddingRight: '80px' }}>
          <h2 className="brand-item-text" style={{ fontFamily: 'var(--tp-ff-gallery)', fontWeight: 400 }}>FURNITURE</h2>
          <h2 className="brand-item-text" style={{ fontWeight: 800 }}>MODERN</h2>
          <h2 className="brand-item-text" style={{ fontFamily: 'var(--tp-ff-gallery)', fontWeight: 400 }}>QUALITY</h2>
          <h2 className="brand-item-text" style={{ fontWeight: 800 }}>FAST</h2>
          <h2 className="brand-item-text" style={{ fontFamily: 'var(--tp-ff-gallery)', fontWeight: 400 }}>ZERO STRESS</h2>
          <h2 className="brand-item-text" style={{ fontWeight: 800 }}>SOURCING</h2>
        </div>
        <style jsx>{`
          .brand-item-text {
            font-size: 60px;
            opacity: 0.3;
            color: var(--tp-theme-primary);
            white-space: nowrap;
          }
          @media (max-width: 768px) {
            .brand-item-text {
              font-size: 40px;
              gap: 40px;
            }
          }
        `}</style>
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
