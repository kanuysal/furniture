import menu_data from "@/data/menu-data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const HeaderMenus = ({ textColor }: { textColor?: string }) => {
  const t = useTranslations('Navigation');
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link} style={{ color: textColor }}>{menu.key ? t(menu.key) : menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
