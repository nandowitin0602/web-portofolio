import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeBtn = () => {
    const { dark, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className="fixed bottom-5 right-5">
            <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full ${dark ? "bg-zinc-50" : "bg-zinc-900"} cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out`}
            >
                {dark ? "☀️" : "🌙"}
            </button>
        </div>
    );
};

export default DarkModeBtn;