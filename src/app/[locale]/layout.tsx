import { locales } from "@/config";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { Syne, Aladin, Marcellus } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "swiper/css/bundle";
import "../globals.scss";

const gellery = localFont({
    src: [
        {
            path: "../../../public/assets/fonts/gallerymodern-webfont.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/gallerymodern-webfont.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/assets/fonts/gallerymodern-webfont.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--tp-ff-gallery",
});

const aladin = Aladin({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--tp-ff-aladin",
});
const syne_body = Syne({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--tp-ff-body",
});
const syne_heading = Syne({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--tp-ff-heading",
});
const syne = Syne({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--tp-ff-syne",
});
const marcellus = Marcellus({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--tp-ff-marcellus",
});

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        metadataBase: new URL('https://minadesign.eu'), // Set this to your actual domain
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            images: [
                {
                    url: '/assets/images/other/images (5)-2136x1425.jpg', // Turkiye production image
                    width: 1200,
                    height: 630,
                    alt: 'Mina Design Furniture Production'
                }
            ],
            type: 'website',
        },
        icons: {
            icon: '/assets/images/logos/mdlogo.png',
            shortcut: '/assets/images/logos/mdlogo.png',
            apple: '/assets/images/logos/mdlogo.png',
        }
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning={true}>
            <body
                id="body"
                suppressHydrationWarning={true}
                className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable}
          ${syne.variable} ${marcellus.variable}`}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider defaultTheme="dark">
                        <VideoProvider>
                            {children}
                        </VideoProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
