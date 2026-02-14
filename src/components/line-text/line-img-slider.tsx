import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import port_1 from "@/assets/img/inner-service/portfolio/port-2.jpg";
import port_2 from "@/assets/img/inner-service/portfolio/port-3.jpg";
import port_3 from "@/assets/img/inner-service/portfolio/port-4.jpg";
import port_4 from "@/assets/img/inner-service/portfolio/port-1.jpg";

const port_images = [
  { src: "/assets/images/sofa/sofa-1-1500x1050.jpg", w: 1500, h: 1050 },
  { src: "/assets/images/sofa/sofa-2-1800x900.jpg", w: 1800, h: 900 },
  { src: "/assets/images/sofa/sofa-3-1934x1289.jpg", w: 1934, h: 1289 },
  { src: "/assets/images/sofa/sofa-4-1800x1012.jpg", w: 1800, h: 1012 },
  { src: "/assets/images/sofa/sofa-5-1800x1013.jpg", w: 1800, h: 1013 },
  { src: "/assets/images/sofa/sofa-6-1852x900.jpg", w: 1852, h: 900 },
];

export default function LineImgSlider() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120">
      <div className="swiper tp-img-slide">
        <Marquee speed={80} pauseOnHover={true}>
          {port_images.map((img, index) => (
            <div
              key={index}
              className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
              style={{ marginRight: '40px' }}
            >
              <Image
                src={img.src}
                alt="sofa-design"
                width={img.w}
                height={img.h}
                style={{ height: '260px', width: 'auto', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
