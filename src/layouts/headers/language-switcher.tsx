import { locales } from "@/config";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";
import React from "react";

export default function LanguageSwitcher({ textColor }: { textColor: string }) {
    const currentLocale = useLocale();
    const pathname = usePathname();

    return (
        <div className="tp-lang-switcher d-flex align-items-center" style={{ gap: '15px', marginRight: '30px' }}>
            {locales.map((l) => (
                <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    style={{
                        color: textColor,
                        fontSize: '14px',
                        fontWeight: currentLocale === l ? '700' : '400',
                        textTransform: 'uppercase',
                        opacity: currentLocale === l ? 1 : 0.5,
                        transition: 'opacity 0.3s'
                    }}
                >
                    {l}
                </Link>
            ))}
        </div>
    );
}
