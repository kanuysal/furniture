import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/app-pages/service/service";
import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Mina Design | Professional Sourcing Process",
};

const ServicePage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ServiceMain />
  );
};

export default ServicePage;
