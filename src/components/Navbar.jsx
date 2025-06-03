import { cn } from "@/lib/utils";
import { useState } from "react";
import { logo } from "../assets";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const navItems = [
  { name: "Home", to: "/", id: "home" },
  { name: "About", to: "/about", id: "about" },
  { name: "Portfolio", to: "/projects", id: "projects" },
  { name: "Contact", to: "/contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Optional: Scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 ",
        isScrolled ? "py-3 shadow-xs" : "py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Name */}
        <NavLink className="flex items-center space-x-2" to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8"
            style={{ objectFit: "contain" }}
          />
          <span className="font-bold text-xl ">Heng Vanreuth</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "cursor-pointer font-medium transition relative px-1",
                  isActive
                    ? "underline underline-offset-4 decoration-2"
                    : "hover:underline hover:underline-offset-4"
                )
              }
              end={item.to === "/"}
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={() => {
              const navMenu = document.getElementById("mobile-nav");
              if (navMenu) {
                navMenu.classList.toggle("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Mobile nav menu */}
        <div
          id="mobile-nav"
          className="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 hidden transition-all duration-300"
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={() => {
              const navMenu = document.getElementById("mobile-nav");
              if (navMenu) {
                navMenu.classList.add("hidden");
              }
            }}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "cursor-pointer text-2xl font-semibold transition",
                  isActive
                    ? "underline underline-offset-4 decoration-2"
                    : "hover:underline hover:underline-offset-4"
                )
              }
              end={item.to === "/"}
              onClick={() => {
                const navMenu = document.getElementById("mobile-nav");
                if (navMenu) {
                  navMenu.classList.add("hidden");
                }
              }}
            >
              {item.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
