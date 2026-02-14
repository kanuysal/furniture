import React from 'react';
import { Leaf } from '../svg';

import { useTranslations } from "next-intl";

export default function AboutFaq() {
    const t = useTranslations('FAQ');

    const faq_data = [
        {
            q: t('q1'),
            a: t('a1')
        },
        {
            q: t('q2'),
            a: t('a2')
        },
        {
            q: t('q3'),
            a: t('a3')
        }
    ];

    return (
        <div className="ab-faq-area pt-120 pb-120 grey-bg-3">
            <div className="container container-1480">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="ab-faq-title-box">
                            <span className="ab-inner-subtitle mb-20">
                                <Leaf />
                                {t('subtitle')}
                            </span>
                            <h4 className="tp-section-title" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '45px' }} dangerouslySetInnerHTML={{ __html: t.raw('title') }}>
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="ab-faq-content pl-70">
                            {faq_data.map((item, i) => (
                                <div key={i} className="ab-faq-item mb-40 tp_fade_bottom">
                                    <h5 style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '24px', marginBottom: '15px' }}>Q: {item.q}</h5>
                                    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>A: {item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
