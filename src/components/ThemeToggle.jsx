import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 flex items-center  rounded-full px-4 py-1 transition"
      aria-label="Toggle theme"
    >
      {/* Switch Track */}
      <span
        className={cn(
          "w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 mr-2",
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        )}
      >
        {/* Switch Thumb */}
        <span
          className={cn(
            "w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center",
            isDarkMode ? "translate-x-5" : "translate-x-0"
          )}
        >
          {isDarkMode ? (
            <Moon size={12} className="text-gray-700" />
          ) : (
            <Sun size={12} className="text-yellow-500" />
          )}
        </span>
      </span>
      {/* <span className="text-white text-sm">
        {isDarkMode ? "Dark" : "Light"}
      </span> */}
    </button>
  );
};