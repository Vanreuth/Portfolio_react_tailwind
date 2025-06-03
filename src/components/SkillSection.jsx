import { useState } from "react";
import { cn } from "@/lib/utils";
import { html ,js ,react ,redux , tailwind ,bootstrap,node, nextjs ,ts,express,mongo, postgre,git,figma,vscode} from "../assets";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: html,des: "HTML and CSS are the foundational technologies for building web pages. HTML provides the structure, while CSS styles the content." },
  { name: "JavaScript", level: 90, category: "frontend", icon: js,des: "JavaScript is a versatile programming language that enables interactive web experiences. It allows developers to implement complex features on web pages." },
  { name: "React", level: 90, category: "frontend", icon: react,des: "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components." },
  { name: "TypeScript", level: 85, category: "frontend", icon: ts,des: "TypeScript is a superset of JavaScript that adds static typing. It helps catch errors early and improves code quality." },
  { name: "Redux", level: 80, category: "frontend", icon: redux,des: "Redux is a state management library for JavaScript applications. It helps manage the state of an application in a predictable way." },
  {name:"Bootstrap", level: 85, category: "frontend", icon: bootstrap,des: "Bootstrap is a popular CSS framework that provides pre-designed components and responsive grid systems for building web applications." },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: tailwind,des: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. It provides a set of pre-defined classes for styling." },
  // { name: "Next.js", level: 80, category: "frontend", icon: nextjs,des: "Next.js is a React framework that enables server-side rendering and static site generation. It improves performance and SEO." },


  { name: "Node.js", level: 80, category: "backend", icon: node,des: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to build scalable server-side applications." },
  // { name: "Express", level: 75, category: "backend", icon: express,des: "Express is a minimal and flexible Node.js web application framework. It provides a robust set of features for building web and mobile applications." },
  // { name: "MongoDB", level: 70, category: "backend", icon: mongo,des: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and performance." },
  // { name: "PostgreSQL", level: 65, category: "backend", icon: postgre,des: "PostgreSQL is a powerful, open-source relational database system. It is known for its robustness and support for advanced data types." },

  { name: "Git/GitHub", level: 90, category: "tools", icon: git,des: "Git is a version control system that helps developers track changes in their code. GitHub is a platform for hosting and collaborating on Git repositories." },
  { name: "Figma", level: 85, category: "tools", icon: figma,des: "Figma is a web-based UI/UX design tool that allows for real-time collaboration. It is widely used for designing user interfaces and prototypes." },
  { name: "VS Code", level: 95, category: "tools", icon: vscode,des: "Visual Studio Code is a popular code editor developed by Microsoft. It offers a wide range of features and extensions for various programming languages." },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section
      id="skills"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2
          data-aos="fade-up" 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-blue-400"> Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div
          data-aos="fade-up" 
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-blue-400 text-white"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              data-aos="fade-up" 
              data-aos-delay="100"
              className="gradient-border p-6 rounded-lg shadow-md card-hover"
            >
            
              <div className=" items-center mb-4">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name + " logo"}
                    className="w-10 h-10  object-contain overflow-hidden "
                  />
                )}
                
                <h3 className="font-semibold text-lg py-2">{skill.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{skill.des}</p>
                
              </div>
              <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-400 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};