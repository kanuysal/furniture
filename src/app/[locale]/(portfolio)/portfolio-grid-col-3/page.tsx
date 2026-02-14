import React from "react";
import { Metadata } from "next";
import PortfolioGridColThreeMain from "@/app-pages/portfolio/portfolio-grid-col-3-main";
import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Mina Design | Premium Collections",
};

const PortfolioGridColThreePage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PortfolioGridColThreeMain />
  );
};

export default PortfolioGridColThreePage;
