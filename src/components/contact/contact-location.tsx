import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: "/assets/images/other/images (4)-1641x1094.jpg",
    country: "Spain",
    time: "Available 7 days a week",
    location_title: "SPANISH HEADQUARTERS (The Face)",
    role: "Project Management & Legal",
    address: "03802 Alcoy, Alicante, Spain.",
    note: "We are your local neighbors. Visit us for a coffee and consultation.",
    phone: "+34 633 623 632",
    email: "export@minadesign.eu",
  },
  {
    id: 2,
    img: "/assets/images/other/images (5)-2136x1425.jpg",
    country: "Turkiye",
    time: "Production hours",
    location_title: "SOURCING HUB (The Engine)",
    role: "Production & Quality Control",
    address: "Mobilium AVM, <br /> İnegöl, Bursa, Turkiye.",
    note: "The epicenter of our manufacturing network of 4000+ partners.",
    phone: "+34 633 623 632",
    email: "export@minadesign.eu",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image
                        src={item.img}
                        alt="image"
                        width={600}
                        height={400}
                        style={{ height: "auto", objectFit: 'cover' }}
                      />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title" style={{ fontFamily: 'var(--tp-ff-gallery)' }}>{item.country}</h4>
                      <span className="mb-10 d-block">
                        <i className="fa-regular fa-clock"></i> {item.time}
                      </span>
                      <p style={{ color: '#fff', fontSize: '14px', opacity: 0.7 }}>{item.role}</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title" style={{ color: '#fff' }}>
                          {item.location_title}
                        </span>
                        <Link
                          href="#"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map mt-2">
                        <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic' }}>{item.note}</p>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href={`tel:${item.phone.replace(/\s+/g, '')}`}>{item.phone}</Link> <br />
                      <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
