import React from 'react';
import { useTranslations } from 'next-intl';

export default function AgencySnapshot() {
    const t = useTranslations('Capacity');

    // We construct the data array inside the component to use the hook
    const snapshot_data = [
        {
            id: 1,
            number: "4,000+",
            label: t('partners_label'),
            message: t('partners_desc'),
            detail: ""
        },
        {
            id: 2,
            number: "25+",
            label: t('heritage_label'),
            message: t('heritage_desc'),
            detail: ""
        },
        {
            id: 3,
            number: "100%",
            label: t('qc_label'),
            message: t('qc_desc'),
            detail: ""
        },
        {
            id: 4,
            number: "Zero",
            label: t('customs_label'),
            message: t('customs_desc'),
            detail: ""
        }
    ];

    return (
        <div className="tp-agency-snapshot-area pt-120 pb-120 black-bg">
            <div className="container container-1480">
                <div className="row">
                    <div className="col-xl-12 text-center mb-80">
                        <h4 style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '50px', color: '#fff' }}>{t('title')}</h4>
                    </div>
                </div>
                <div className="row">
                    {snapshot_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mb-40">
                            <div className="tp-snapshot-item text-center">
                                <h3 className="mb-10" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '60px', color: '#fff' }}>{item.number}</h3>
                                <h5 className="mb-20" style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>{item.label}</h5>
                                <p style={{ color: '#777', fontSize: '16px', lineHeight: '1.4' }}>{item.message}</p>
                                {/* Removed detail p tag as it was hardcoded Turkish, now integrated or removed based on design choice for clean look */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
