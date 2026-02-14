import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
// images
// import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/images/other/images (7)-2016x1344.jpg";
import gallery_2 from "@/assets/images/other/images (14)-2016x1344.jpg";
import gallery_3 from "@/assets/images/other/images (13)-1800x1200.jpg";
import gallery_4 from "@/assets/images/other/images (6)-1684x1123.jpg";
import MobileMenus from "./mobile-menus";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/layouts/headers/language-switcher";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  const tNav = useTranslations('Navigation');
  const tFooter = useTranslations('Footer');
  const tContact = useTranslations('Contact');
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`} style={{ background: '#111', color: '#fff' }}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo d-flex align-items-center">
              <Link href="/" className="d-flex align-items-center">
                <Image
                  src="/assets/images/logos/mdlogo.png"
                  alt="Mina Design Logo"
                  width={40}
                  height={40}
                  style={{ marginRight: '10px', filter: 'brightness(0) invert(1)' }}
                />
                <h3 className="mb-0" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '30px', color: '#fff' }}>Mina Design.</h3>
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <div className="mb-30">
                <LanguageSwitcher textColor="#fff" />
              </div>
              <h3 className="tp-offcanvas-title" style={{ color: '#fff' }}>Mina Design</h3>
              <p style={{ color: '#aaa' }}>{tFooter('desc')}</p>
            </div>
            <div className="tp-main-menu-mobile">
              <MobileMenus setOpenOffcanvas={setOpenOffcanvas} />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link href="#">
                        <Image
                          style={{ width: "100%", height: "100px", objectFit: "cover" }}
                          src={item}
                          alt="gallery-img"
                          width={150}
                          height={150}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm" style={{ color: '#fff' }}>{tNav('about')}</h3>

              <ul>
                <li>
                  <Link href="mailto:export@minadesign.eu" style={{ color: '#aaa' }}>export@minadesign.eu</Link>
                </li>
                <li>
                  <Link href="#" style={{ color: '#aaa' }}>Alicante, Spain</Link>
                </li>
                <li>
                  <Link href="#" style={{ color: '#aaa' }}>İnegöl, Turkiye</Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm" style={{ color: '#fff' }}>{"Follow Us"}</h3>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/company/minadesign" target="_blank" style={{ color: '#aaa', borderColor: 'rgba(255,255,255,0.1)' }}>LinkedIn</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
