"use client";
import React from "react";
import Image from "next/image";

// award images
// award images
import a_1 from "@/assets/images/masif/masif-4-1103x815.jpg";
import a_2 from "@/assets/images/masif/masif-5-614x921.jpg";
import a_3 from "@/assets/images/masif/masif-6-1617x1080.jpg";
import a_4 from "@/assets/images/masif/masif-8-1449x2172.jpg";
import a_5 from "@/assets/images/masif/masif-9-1143x1712.jpg";
import a_6 from "@/assets/images/masif/masif-10-1209x907.jpg";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    subtitle: "Spain",
    title: "Regional Logistics Excellence",
    date: "",
  },
  {
    id: 2,
    img: a_2,
    subtitle: "Alicante",
    title: "European Quality Standards",
    date: "",
  },
  {
    id: 3,
    img: a_3,
    subtitle: "İnegöl",
    title: "Direct Hub Integrated",
    date: "",
  },
  {
    id: 4,
    img: a_4,
    subtitle: "DDP",
    title: "Seamless Supply Chain",
    date: "",
  },
  {
    id: 5,
    img: a_5,
    subtitle: "B2B",
    title: "Hotel Project Sourcing",
    date: "",
  },
  {
    id: 6,
    img: a_6,
    subtitle: "B2B",
    title: "Retail Chain Partners",
    date: "",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Logistics <br /> <span>& Quality Excellence</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;
