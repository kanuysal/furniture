import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                Engineered Sourcing. <br /> Flawless Execution.
              </h4>
              <p className="tp_fade_bottom" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '800px' }}>
                We don’t just buy and sell. We engineer the supply chain from İnegöl’s production lines to your facility in Spain. Managed by Industrial Engineers, executed by master craftsmen.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src="/assets/images/other/images (3)-2476x1651.jpg"
                  alt="ser_hero-img"
                  width={1530}
                  height={800}
                  style={{ height: "auto", objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
