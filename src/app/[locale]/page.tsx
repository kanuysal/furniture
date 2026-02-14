import HomeOnePage from "@/app-pages/homes/home-1";
import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <HomeOnePage />
        </>
    );
}
