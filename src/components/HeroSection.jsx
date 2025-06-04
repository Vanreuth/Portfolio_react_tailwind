import { ArrowRight, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../assets";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen font-sans flex items-center justify-center py-8 px-4 sm:px-10 lg:px-8 mt-10"
    >
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:space-x-15 z-10 max-w-7xl">
        <div className="flex-1 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className=" mt-6 md:mt-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden flex items-center justify-center mb-8 md:mb-0 border-4 border-gray-700 shadow-xl"
          >
            <img
              src={profile}
              alt="Heng's Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:mt-12">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="border-t-4 border-white w-24 mb-4 mx-auto md:mx-0"
            ></div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span data-aos="fade-up" data-aos-delay="300" className="block">I’m Vanreuth, a</span>
              <span data-aos="fade-up" data-aos-delay="400" className="block text-blue-400">Web</span>
              <span data-aos="fade-up" data-aos-delay="500" className="block">Developer</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-base md:text-lg  mt-4 max-w-xl mx-auto md:mx-0"
            >
              Make it work, make it right, make it fast.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-sm  italic mt-2"
            >
              —Vanreuth,{" "}
              <span className="not-italic font-semibold">Motivation</span>
            </p>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 flex flex-col items-center md:items-start space-y-8">
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            className="gradient-border p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className=" leading-relaxed text-sm mb-4">
              I bring expertise in designing and implementing website features,
              prioritizing functionality, responsiveness, and optimal user
              experience.
            </p>
            <a
              href="#about"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition duration-300"
            >
              LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            className="gradient-border p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold mb-4 ">MY WORK</h2>
            <p className=" leading-relaxed text-sm mb-4">
              My responsibilities encompass designing and implementing website
              features, ensuring functionality, responsiveness, and a positive
              user experience. Collaboration with cross-functional teams,
              adherence to best coding practices, regular testing for
              performance and security, troubleshooting, debugging, and staying
              abreast of industry trends are integral to enhancing and
              maintaining the quality of web projects.
            </p>
            <a
              href="#projects"
              className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition duration-300"
            >
              BROWSE PORTFOLIO <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="gradient-border p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-semibold mb-4 ">
              FOLLOW ME
            </h2>
            <div className="flex gap-6">
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
                  className="w-9 h-10"
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
    </section>
  );
};
