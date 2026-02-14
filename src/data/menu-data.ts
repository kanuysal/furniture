import { IMenuDT } from "@/types/menu-d-t";

const menu_data: (IMenuDT & { key?: string })[] = [
  {
    id: 1,
    title: 'Home',
    key: 'home',
    link: '/',
  },
  {
    id: 2,
    title: 'Collections',
    key: 'projects',
    link: '/portfolio-grid-col-3',
  },
  {
    id: 3,
    title: 'Process',
    key: 'services',
    link: '/service',
  },
  {
    id: 4,
    title: 'About',
    key: 'about',
    link: '/about-us',
  },
  {
    id: 5,
    title: 'Contact',
    key: 'contact',
    link: '/contact',
  }
];

export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  key: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
    {
      id: 1,
      title: 'Home',
      key: 'home',
      link: '/',
      dropdown_menus: []
    },
    {
      id: 2,
      title: 'Collections',
      key: 'projects',
      link: '/portfolio-grid-col-3',
      dropdown_menus: []
    },
    {
      id: 3,
      title: 'Process',
      key: 'services',
      link: '/service',
      dropdown_menus: []
    },
    {
      id: 4,
      title: 'About',
      key: 'about',
      link: '/about-us',
      dropdown_menus: []
    },
    {
      id: 5,
      title: 'Contact',
      key: 'contact',
      link: '/contact',
      dropdown_menus: []
    }
  ]