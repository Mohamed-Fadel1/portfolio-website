import {
  Code2,
  Palette,
  Zap,
  Smartphone,
  Database,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      desc: "Building fast, responsive, and modern web applications using React and the latest technologies.",
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      desc: "Creating beautiful and intuitive user interfaces that users love to interact with.",
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      desc: "Ensuring your website looks perfect on every device, from mobile to desktop.",
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      desc: "Optimizing websites for speed and performance to deliver the best user experience.",
    },
    {
      id: 5,
      icon: <Database className="w-8 h-8" />,
      title: "API Integration",
      desc: "Connecting your frontend with powerful backend services and REST APIs.",
    },
    {
      id: 6,
      icon: <GitBranch className="w-8 h-8" />,
      title: "Version Control",
      desc: "Using Git and GitHub for clean, organized, and collaborative development workflows.",
    },
  ];

  const fadeLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 1, ease: "easeOut" },
    },
  });

  const fadeRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 1, ease: "easeOut" },
    },
  });

  return (
    <section id="about" className=" overflow-hidden py-20 relative">
      <div className="container">
        {/* Title */}
        <motion.div
          variants={fadeLeft(0.1)}
          initial="hidden"
          whileInView="show"
          className="text-center group w-fit mx-auto mb-16"
        >
          {" "}
          <span className="inline-block tracking-widest text-primary uppercase font-semibold">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4 text-black">
            About <span className="text-primary">Me</span>
          </h2>
          <span className="block h-1 w-20 bg-linear-to-r from-primary to-violet-500 mx-auto mb-4 rounded-full transition-all duration-300 group-hover:w-40"></span>
        </motion.div>

        <span className="w-70 h-70  absolute blur-3xl dark:bg-primary/20"></span>

        {/* Bio */}
        <mdiv className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Text */}
          <div className="space-y-5">
            <motion.h3
              variants={fadeLeft(0.1)}
              initial="hidden"
              whileInView="show"
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            >
              A passionate{" "}
              <span className="text-primary">Frontend Developer</span> based in
              your city
            </motion.h3>

            <motion.p
              variants={fadeLeft(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Hi! I'm{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Mohamed Fadel
              </span>
              , a Frontend Developer with over 3 years of experience building
              modern web applications. I specialize in turning ideas into
              beautiful, functional digital experiences.
            </motion.p>

            <motion.p
              variants={fadeLeft(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              My journey started with a simple curiosity about how websites
              work, and it quickly became a passion. Today, I work with React,
              Tailwind CSS, and modern JavaScript to craft responsive,
              accessible, and high-performance websites.
            </motion.p>

            <motion.p
              variants={fadeLeft(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new design trends,
              contributing to open-source, or sharing what I learn with the
              developer community.
            </motion.p>
          </div>

          {/*  Information Cards*/}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={fadeRight(0.1)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Name
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Mohamed Fadel
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight(0.1)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Location
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Your City, Country
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Email
              </p>
              <p className="font-semibold text-gray-900 dark:text-white truncate">
                you@email.com
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Experience
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                3+ Years
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight(0.3)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Freelance
              </p>
              <p className="font-semibold text-green-600 dark:text-green-400">
                Available
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight(0.3)}
              initial="hidden"
              whileInView="show"
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/50"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Languages
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                AR, EN
              </p>
            </motion.div>
          </div>
        </mdiv>

        {/* What i do  */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            What I <span className="text-primary">Do</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These are the services I offer to help bring your ideas to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 
                  hover:border-primary dark:hover:border-primary 
                  hover:shadow-[0_0_25px] hover:shadow-primary/30 
                  transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
