import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: "/assets/images/other/images (12)-1500x999.jpg",
    subtitle: "PHASE ONE",
    title: "Technical Consultation & Analysis",
    text: "We start by analyzing your project files (CAD/Specs). We don't just quote; we optimize. We match your specific requirements with the exact facility that specializes in that domain.",
    lists: [
      "CAD/Technical Optimization",
      "Material Specification (Solid wood, Upholstery, Metal)",
      "4000+ Manufacturer Network Mapping",
      "Cost-Quality Benchmarking",
    ],
  },
  {
    id: 2,
    img: "/assets/images/other/images (14)-2016x1344.jpg",
    subtitle: "PHASE TWO",
    title: "Production Engineering & QA",
    text: "Once production starts, we are on the factory floor. We implement Real-Time Quality Control (QC) checkpoints to ensure every piece meets European technical standards.",
    lists: [
      "Real-Time QC Checkpoints",
      "Weekly Video Progress Reports",
      "Industrial Engineering Supervision",
      "Technical Compliance Audits",
    ],
  },
  {
    id: 3,
    img: "/assets/images/other/images (1)-2100x840.jpg",
    subtitle: "PHASE THREE",
    title: "The Logistics Algorithm",
    text: "We handle the complex part. Export documentation, customs clearance, and freight optimization. Our specialized partners ensure your goods travel safely from Bursa to the Iberian Peninsula.",
    lists: [
      "Freight Optimization",
      "Customs Clearance Management",
      "Bursa to Spain Route Planning",
      "Full Insurance Coverage",
    ],
  },
  {
    id: 4,
    img: "/assets/images/other/images (7)-2016x1344.jpg",
    subtitle: "PHASE FOUR",
    title: "DDP Delivery (Door-to-Door)",
    text: "The final leg. We deliver under DDP (Delivered Duty Paid) terms. We handle all import taxes and VAT procedures in Spain. You receive the goods as if you bought them locally.",
    lists: [
      "Delivered Duty Paid (DDP)",
      "Import Tax & VAT Management",
      "Site/Hotel/Warehouse Delivery",
      "Final Installation Coordination",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    width={1200}
                    height={800}
                    style={{ height: "auto", objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/contact"
                        >
                          <span className="zikzak-content">
                            Contact
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
