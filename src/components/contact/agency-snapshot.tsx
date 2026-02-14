import React from 'react';

const snapshot_data = [
    {
        id: 1,
        number: "4,000+",
        label: "Manufacturing Partners",
        message: "Direct access to İnegöl’s finest artisan workshops and high-tech factories.",
        detail: "Biz tek fabrika değiliz, biz 4000 fabrikalık bir kooperatif gücüyüz."
    },
    {
        id: 2,
        number: "25+",
        label: "Years of Heritage",
        message: "Born in the furniture capital, perfected with Industrial Engineering.",
        detail: "Dün kurulmadık. Çocukluğumuz talaş tozuyla geçti."
    },
    {
        id: 3,
        number: "100%",
        label: "Quality Control (QC)",
        message: "Every stitch and joint is inspected before shipping. Zero defects.",
        detail: "Mühendislik farkı burada. Hata payı yok."
    },
    {
        id: 4,
        number: "Zero",
        label: "Customs & Tax Hassle",
        message: "We handle all import duties. Delivered directly to your door in Spain.",
        detail: "Sıfır stres. Gümrükle, vergiyle uğraşmazsınız. DDP teslimatın gücü."
    }
];

export default function AgencySnapshot() {
    return (
        <div className="tp-agency-snapshot-area pt-120 pb-120 black-bg">
            <div className="container container-1480">
                <div className="row">
                    <div className="col-xl-12 text-center mb-80">
                        <h4 style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '50px', color: '#fff' }}>Operational Capacity</h4>
                    </div>
                </div>
                <div className="row">
                    {snapshot_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="tp-snapshot-item text-center">
                                <h3 className="mb-10" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '60px', color: '#fff' }}>{item.number}</h3>
                                <h5 className="mb-20" style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>{item.label}</h5>
                                <p style={{ color: '#777', fontSize: '16px', lineHeight: '1.4' }}>{item.message}</p>
                                <p className="mt-2" style={{ color: '#444', fontSize: '13px', fontStyle: 'italic' }}>{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
