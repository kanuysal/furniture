'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeaderMenus from "./header-menus";
import { Link, usePathname } from "@/navigation";
import MobileOffcanvas from "@/components/offcanvas/mobile-offcanvas";
import useStickyHeader from "@/hooks/use-sticky-header";
import { useLocale } from "next-intl";

import LanguageSwitcher from "./language-switcher";

// prop type 
type IProps = {
  transparent?: boolean;
  cls?: string;
}
export default function HeaderEleven({ transparent = false, cls = '' }: IProps) {
  const { isSticky, headerFullWidth } = useStickyHeader(20);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return (
    <header className="tp-header-height z-index-5">
      <div className={`tp-inner-header-area ${cls} ${transparent ? 'transparent' : 'tp-inner-header-style-2'} tp-inner-header-mob-space`}>
        <div className="container container-1800">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-6">
              <Link href="/">
                <h3 className="mb-0" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '40px', color: '#fff' }}>Mina Design.</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  // Logical color helper
  const isWhite = theme === "dark";
  const textColor = isWhite ? '#fff' : '#000';

  return (
    <>
      <header className="tp-header-height z-index-5">
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${transparent ? 'transparent' : 'tp-inner-header-style-2'} tp-inner-header-mob-space ${isSticky ? "header-sticky" : ""}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo d-flex align-items-center">
                  <Link className="logo-1 d-flex align-items-center" href="/">
                    <Image
                      src="/assets/images/logos/mdlogo.png"
                      alt="Mina Design Logo"
                      width={50}
                      height={50}
                      style={{ marginRight: '10px', filter: isWhite ? 'brightness(0) invert(1)' : 'none' }}
                    />
                    <h3 className="mb-0" style={{ fontFamily: 'var(--tp-ff-gallery)', fontSize: '32px', color: textColor }}>Mina Design.</h3>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus textColor={textColor} />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <ul className="d-flex align-items-center justify-content-end">
                    <li className="d-none d-md-block">
                      <LanguageSwitcher textColor={textColor} />
                    </li>
                    <li>
                      <div className="tp-inner-bar tp-header-bar">
                        <button
                          onClick={() => setOpenOffCanvas(true)}
                          className="tp-offcanvas-open-btn"
                        >
                          <span style={{ backgroundColor: textColor }}></span>
                          <span style={{ backgroundColor: textColor }}></span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}

