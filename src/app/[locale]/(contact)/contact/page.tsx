import React from "react";
import { Metadata } from "next";
import ContactMain from "@/app-pages/contact/contact";
import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export const metadata: Metadata = {
  title: "Liko - Contact page",
};

const ContactPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ContactMain />
  );
};

export default ContactPage;
