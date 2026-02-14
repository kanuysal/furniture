"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { footerOneAnimation } from "@/utils/footer-anim";

const footer_links = [
  { link: "/", key: 'home' },
  { link: "/portfolio-grid-col-3", key: 'projects' },
  { link: "/service", key: 'services' },
  { link: "/about-us", key: 'about' },
  { link: "/contact", key: 'contact' },
];

export default function FooterOne() {
  const tNav = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  }, [])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <Link href={item.link}>{tNav(item.key)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">{tNav('contact')}!</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          {tFooter('desc')}
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href="mailto:export@minadesign.eu">
                              export@minadesign.eu
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <span>
                              Alicante, Spain <br /> İnegöl, Turkiye
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          LinkedIn
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <Link href="https://www.linkedin.com/company/minadesign" target="_blank">LinkedIn</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <h3 className="mb-0" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '40px', color: '#fff' }}>Mina Design.</h3>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    {tFooter('copyright', { year: new Date().getFullYear() })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
