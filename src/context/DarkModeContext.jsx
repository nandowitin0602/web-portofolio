import { createContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("dark");

        if (savedTheme !== null) {
            return savedTheme === "true";
        }

        return true;
    });

    useEffect(() => {
        localStorage.setItem("dark", dark);

        if (dark) {
            document.body.className = "bg-zinc-900 text-zinc-50 transition-all duration-300 ease-in-out";
        } else {
            document.body.className = "bg-zinc-50 text-zinc-900 transition-all duration-300 ease-in-out";
        }
    }, [dark]);

    const toggleDarkMode = () => {
        setDark(prev => !prev);
    };

    return (
        <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};