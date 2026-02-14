import menu_data from "@/data/menu-data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const HeaderMenus = () => {
  const t = useTranslations('Navigation');
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.key ? t(menu.key) : menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
