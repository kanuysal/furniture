import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import menu_data from "@/data/menu-data";
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus({ setOpenOffcanvas }: { setOpenOffcanvas?: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => (
            <li key={menu.id} style={{ marginBottom: '15px' }}>
              <Link
                href={menu.link}
                className="pointer"
                style={{ fontSize: '24px', fontWeight: '500', display: 'block' }}
                onClick={() => setOpenOffcanvas && setOpenOffcanvas(false)}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
