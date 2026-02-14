import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/app-pages/about/about-us";
import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Liko - About us page",
};

const AboutUsPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <AboutUsMain />
  );
};

export default AboutUsPage;
