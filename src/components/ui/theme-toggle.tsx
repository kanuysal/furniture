import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "../svg";

// props
type IProps = {
    style_2?: boolean;
    textColor?: string;
};

const ThemeToggle = ({ style_2 = false, textColor }: IProps) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <React.Fragment>
            {style_2 ? (
                <div className="tp-theme-toggle">
                    <button
                        className={`tp-theme-toggle-btn ${theme === "dark" ? "active" : ""}`}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </button>
                </div>
            ) : (
                <button
                    className="tp-theme-toggle-main"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    style={{ color: textColor || 'inherit', background: 'none', border: 'none', padding: '0 10px' }}
                    aria-label={"Toggle Dark Mode"}
                >
                    {theme === "dark" ? <Sun /> : <Moon />}
                </button>
            )}
        </React.Fragment>
    );
};

export default ThemeToggle;
