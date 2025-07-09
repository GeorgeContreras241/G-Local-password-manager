"use client"
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false); // valor inicial por defecto
    const [mounted, setMounted] = useState(false); // control para renderizar solo en cliente

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setTheme(true);
        } else {
            setTheme(false);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("theme", theme ? "dark" : "light");
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => !prev);
    };

    if (!mounted) return null; // Previene renderización hasta tener tema

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
