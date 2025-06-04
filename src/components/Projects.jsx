import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { project ,project2,project3} from "../assets/index";

const projects = [
  {
    id: 1,
    title: "World of Tourist Places",
    description: "Search and find tourist places around the world.",
    image: project,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://turist-places.vercel.app/",
    githubUrl: "https://github.com/Vanreuth/TuristPlaces",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Build E commerce platform with React with tailwind CSS full  feture with cart and payment system.",
    image: project3,
    tags: ["React", "Tailwind CSS"],	
    demoUrl: "https://vanreutheccomerce.vercel.app/",
    githubUrl: "https://github.com/Vanreuth/Ecommerce",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Converted E-commerce platform from HTML/CSS/Bootstrap to React with Fake Store API integration and PayPal payment processing.",
    image: project2,
    tags: ["React", "Fake Store API", "PayPal"],
    demoUrl: "https://hengvanreuth.vercel.app/",
    githubUrl: "https://github.com/Vanreuth/Ecommerce-Fashion",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-blue-400"> Projects </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center  mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              data-aos="fade-up"
              data-aos-delay={key * 150 + 200}
              className="group  rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-700 text-gray-200 border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className=" text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={projects.length * 100 + 300}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Vanreuth"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
