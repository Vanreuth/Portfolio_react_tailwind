import { Briefcase, Code, User } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24  relative ">
      <div className="container mx-auto max-w-5xl">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-blue-400"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-2xl font-semibold"
            >
              Frontend Developer & Tech Enthusiast
            </h3>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
            >
              I am a frontend developer with 6 months of internship experience, focused on building responsive and user-friendly web applications using modern technologies.
            </p>

            <p
              data-aos="fade-right"
              data-aos-delay="300"
            >
              I enjoy solving problems with clean code and intuitive design, and I am always eager to learn new tools and frameworks to improve my skills.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1vl8DwIQrrWUvbHEFCQyxWboSCJ_chJ20/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="gradient-border p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p >
                    Building responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="600"
              className="gradient-border p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p>
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="gradient-border p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-400/10">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Collaboration</h4>
                  <p>
                    Working with teams to deliver quality projects during my internship experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-start mt-8"
        >
          <Link
            to="/more-about-me"
            data-aos="fade-up"
            className="inline-flex items-center text-3xl md:text-4xl font-medium mb-12 text-center border-b-4  duration-300 pb-1 group"
            style={{ textDecoration: "none" }}
          >
            More about me
            <svg
              className="ml-3 h-8 w-8 group duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
