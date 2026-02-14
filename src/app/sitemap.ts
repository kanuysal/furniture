import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://minalidya.com';
const locales = ['en', 'es', 'fr', 'de', 'tr'];

const routes = [
    '',
    '/about-us',
    '/service',
    '/portfolio-grid-col-3',
    '/contact'
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries = routes.flatMap((route) => {
        return locales.map((locale) => ({
            url: `${BASE_URL}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        }));
    });

    return sitemapEntries;
}
