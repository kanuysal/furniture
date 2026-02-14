import { Metadata } from 'next';
import ErrorMain from '@/app-pages/error/error-main'
import { locales } from "@/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Liko - Not Found Page",
};

export default function NotFound() {
  return (
    <ErrorMain />
  )
}

