import { ExternalLink, GitBranch, Folder } from "lucide-react";

const Projects = () => {
  const projectsCards = [
    {
      id: 1,
      title: "Fruit Store",
      desc: "A modern fruit e-commerce with cart and smooth animations.",
      tech: ["React", "Tailwind"],
      demo: "https://mohamed-fadel1.github.io/Fruit-React-Tailwind/",
      link: "https://github.com/Mohamed-Fadel1/Fruit-React-Tailwind",
      img: "/projects-Imgs/frute-store.png",
    },
    {
      id: 2,
      title: "E-Tutor",
      desc: "An online learning platform with courses and instructors.",
      tech: ["React", "Tailwind", "Router"],
      demo: "https://mohamed-fadel1.github.io/E-tutor-React/",
      link: "https://github.com/Mohamed-Fadel1/E-tutor-React",
      img: "/projects-Imgs/e-tutor.png",
    },
    {
      id: 3,
      title: "Halloween Site",
      desc: "A spooky themed landing page with creative animations.",
      tech: ["HTML", "Tailwind"],
      demo: "https://mohamed-fadel1.github.io/haloween-tailwind/",
      link: "https://github.com/Mohamed-Fadel1/haloween-tailwind",
      img: "/projects-Imgs/halloween.png",
    },

    {
      id: 4,
      title: "Ecommerce products Site",
      desc: "A modern e-commerce site with product filtering, search, and a dynamic shopping cart.",
      tech: ["React", "Tailwind", "API"],
      demo: "https://mohamed-fadel1.github.io/ecommerce-vite-tailwind/#/login",
      link: "https://github.com/Mohamed-Fadel1/ecommerce-vite-tailwind/settings/pages",
      img: "/projects-Imgs/Ecommerce-products.png",
    },

    {
      id: 5,
      title: "Burger Store",
      desc: "An appetizing burger shop with menu and ordering system.",
      tech: ["React", "Tailwind"],
      demo: "https://mohamed-fadel1.github.io/burger-tailwind/",
      link: "https://github.com/Mohamed-Fadel1/burger-tailwind",
      img: "/projects-Imgs/burger-store.png",
    },
    {
      id: 6,
      title: "Tasty E-Commerce",
      desc: "A full-featured food e-commerce with cart and checkout.",
      tech: ["React", "Tailwind", "API"],
      demo: "https://mohamed-fadel1.github.io/tasty-ecommerce/",
      link: "https://github.com/Mohamed-Fadel1/tasty-ecommerce",
      img: "/projects-Imgs/tasty-food.png",
    },
    {
      id: 7,
      title: "Fokir",
      desc: "A personal portfolio with modern and minimal design.",
      tech: ["HTML", "CSS", "JS"],
      demo: "https://mohamed-fadel1.github.io/Fokir/",
      link: "https://github.com/Mohamed-Fadel1/Fokir",
      img: "/projects-Imgs/fokir.png",
    },
    {
      id: 8,
      title: "Weather App",
      desc: "A real-time weather app using external API with city search.",
      tech: ["React", "API", "Tailwind"],
      demo: "https://mohamed-fadel1.github.io/weather-react-project/",
      link: "https://github.com/Mohamed-Fadel1/weather-react-project",
      img: "/projects-Imgs/weather.png",
    },
    {
      id: 9,
      title: "LightCode",
      desc: "A clean coding-themed landing page with dark aesthetic.",
      tech: ["HTML", "Tailwind"],
      demo: "https://mohamed-fadel1.github.io/lightCode-tailwind/",
      link: "https://github.com/Mohamed-Fadel1/lightCode-tailwind",
      img: "/projects-Imgs/light-code.png",
    },
  ];

  return (
    <section id="projects" className="container py-20">
      {/* Title */}
      <div className="text-center group mb-16 w-fit mx-auto">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          What I've built
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4">
          A selection of my recent work, from landing pages to full-featured
          apps.
        </p>
        <span className="block h-1 w-20 bg-linear-to-r from-primary to-violet-500 mx-auto rounded-full transition-all duration-300 group-hover:w-40"></span>
      </div>

      {/* grid projects*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projectsCards.map((project, index) => (
          <article
            key={project.id}
            style={{ animationDelay: `${index * 80}ms` }}
            className="group relative bg-white dark:bg-gray-800/50 
              rounded-2xl overflow-hidden 
              border border-gray-200 dark:border-gray-700/50
              hover:border-primary/50 dark:hover:border-primary/50
              hover:shadow-[0_0_30px] hover:shadow-primary/20
              transition-all duration-500
              hover:-translate-y-2
              flex flex-col
              opacity-0 animate-fade-up"
          >
            {/* 🖼️ Image */}
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover 
                  group-hover:scale-110 
                  transition-transform duration-700 ease-out"
              />

              {/* 🟢 Overlay عند الـ Hover */}
              <div
                className="absolute inset-0 bg-linear-to-t 
                from-black/80 via-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 
                flex items-end justify-center gap-3 pb-6"
              >
                {/* button Live Demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 
                    bg-white text-gray-900 
                    px-4 py-2 rounded-full 
                    text-sm font-medium 
                    hover:bg-primary hover:text-white 
                    transition-all duration-200 
                    shadow-lg"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>

                {/* 🟢 button githup */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 
                    bg-gray-900/80 backdrop-blur-sm text-white 
                    px-4 py-2 rounded-full 
                    text-sm font-medium 
                    hover:bg-gray-900 
                    transition-all duration-200 
                    shadow-lg border border-white/10"
                >
                  <GitBranch size={14} />
                  Code
                </a>
              </div>
            </div>

            {/* 📝 content */}
            <div className="p-5 flex flex-col grow">
              {/* title and icon*/}
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="text-lg font-bold text-gray-900 dark:text-white 
                  group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <Folder size={20} className="text-primary/70 shrink-0 mt-0.5" />
              </div>

              {/* desc */}
              <p
                className="text-sm text-gray-600 dark:text-gray-400 
                leading-relaxed mb-4 grow"
              >
                {project.desc}
              </p>

              {/* 🏷️ التقنيات */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium 
                      text-primary bg-primary/10 
                      dark:text-primary dark:bg-primary/20
                      px-2.5 py-1 rounded-full
                      border border-primary/20 dark:border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* button see more */}
      <div className="text-center mt-14">
        <a
          href="https://github.com/Mohamed-Fadel1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 
            bg-transparent border-2 border-primary 
            text-primary dark:text-white dark:border-primary 
            px-6 py-3 rounded-full 
            font-medium 
            hover:bg-primary hover:text-white 
            hover:shadow-[0_0_25px] hover:shadow-primary/50
            transition-all duration-300"
        >
          <GitBranch size={18} />
          See More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
