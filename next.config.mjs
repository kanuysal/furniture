import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other Next.js configuration ...
    images: {
        unoptimized: true,
    },
    // We can enable this if we want full static export, but for i18n we usually use node
    transpilePackages: ['next-intl'],
    output: 'export',
    trailingSlash: true,
};

export default withNextIntl(nextConfig);
