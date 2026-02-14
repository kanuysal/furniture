import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) {
        locale = 'en';
    }

    // Ensure that a valid locale is used
    let messages;
    try {
        switch (locale) {
            case 'tr': messages = (await import('../messages/tr.json')).default; break;
            case 'es': messages = (await import('../messages/es.json')).default; break;
            case 'fr': messages = (await import('../messages/fr.json')).default; break;
            case 'de': messages = (await import('../messages/de.json')).default; break;
            case 'en':
            default: messages = (await import('../messages/en.json')).default; break;
        }
    } catch (e) {
        messages = (await import('../messages/en.json')).default;
    }

    return {
        locale,
        messages
    };
});
