import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Send } from "lucide-react";
import { profile } from "../assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className=" pt-8 md:pt-16 pb-8 px-4 relative border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div
          className="flex flex-col sm:flex-row items-center sm:items-start w-full sm:w-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4  mb-4 mt-4"
          />
          <div className="flex flex-col items-center sm:items-start gap-2 sm:ml-6 p-4">
            <h2 className="text-2xl font-semibold ">Heng Vanreuth</h2>
            <p className="text-muted-foreground text-sm">
              Front end Web Developer
            </p>
            <div className="flex flex-col items-center sm:items-start mt-4">
              <div className="flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
                <a
                  href="https://www.facebook.com/share/15hDXxmTGp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@user4523040302778?_t=ZS-8wrOlewKaaA&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Vanreuth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://t.me/Vanreuth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <Send className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/heng-vanreuth-0051812a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 md:items-start"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-semibold  mb-2 flex items-center gap-2">
            GET IN TOUCH <span className="text-primary text-2xl">&#8594;</span>
          </h3>
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <div className="text-muted-foreground font-semibold">
                  EMAIL ME:
                </div>
                <a
                  href="mailto:hengvanreuth.17@gmail.com"
                  className=" flex items-center gap-2 hover:underline"
                >
                  hengvanreuth.17@gmail.com
                  <span className="text-primary text-lg">&#8594;</span>
                </a>
              </div>
              <div>
                <div className="text-muted-foreground font-semibold">
                  CALL ME:
                </div>
                <span className="">0883386537</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#23262A] my-8"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <nav className="flex gap-8 text-white text-base">
          <Link to="/home" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link to="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <Link to="/portfolio" className="hover:text-primary transition">
            Portfolio
          </Link>
        </nav>
        <p className="text-muted-foreground text-sm text-center">
          &copy; Copyright 2025 All rights reserved by Heng Vanreuth | Developed
          by{" "}
          <a
            href="https://github.com/Vanreuth"
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            HengVanreuth
          </a>
        </p>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-black text-white hover:bg-primary transition-colors shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} />
        </button>
      </div>
    </footer>
  );
};
