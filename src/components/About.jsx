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
  const skills = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      desc: "Building modern web applications using JavaScript, React, reusable components, and clean code practices.",
    },
    {
      id: 2,
      icon: <Palette className="w-8 h-8" />,
      title: "UI Development",
      desc: "Creating clean, attractive user interfaces with Tailwind CSS, focusing on usability and visual consistency.",
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      desc: "Building responsive layouts that adapt smoothly to mobile, tablet, and desktop screens.",
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Applications",
      desc: "Implementing interactive features, component state, routing, forms, and dynamic user experiences.",
    },
    {
      id: 5,
      icon: <Database className="w-8 h-8" />,
      title: "API & Data Integration",
      desc: "Connecting frontend applications to REST APIs and working with asynchronous data, loading states, and errors.",
    },
    {
      id: 6,
      icon: <GitBranch className="w-8 h-8" />,
      title: "Git & GitHub",
      desc: "Managing project code with Git, maintaining GitHub repositories, and deploying projects for others to explore.",
    },
  ];

  // Animation from the left
  const fadeLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  // Animation from the right
  const fadeRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  // Animation from bottom to top
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  const profileInfo = [
    { label: "Name", value: "Mohamed Fadel", delay: 0.1 },
    { label: "Location", value: "Syria, Aleppo", delay: 0.1 },
    {
      label: "Email",
      value: "mf90705520@gmail.com",
      delay: 0.2,
      truncate: true,
    },
    { label: "Focus", value: "Frontend Development", delay: 0.2 },
    {
      label: "Experience",
      value: "3+ Years",
    },
    { label: "Languages", value: "Arabic, English", delay: 0.3 },
  ];

  return (
    <section id="about" className="overflow-hidden py-20 relative">
      <div className="container">
        {/* Title */}
        <motion.div
          variants={fadeLeft(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center group w-fit mx-auto mb-16"
        >
          <span className="inline-block tracking-widest text-primary uppercase font-semibold">
            Get to know me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>

          <span className="block h-1 w-20 bg-linear-to-r from-primary to-violet-500 mx-auto mb-4 rounded-full transition-all duration-300 group-hover:w-40" />
        </motion.div>

        {/* Decorative glow */}
        <span className="w-70 h-70 absolute -z-10 top-20 left-0 rounded-full blur-3xl bg-primary/5 dark:bg-primary/20 pointer-events-none" />

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Introduction */}
          <div className="space-y-5">
            <motion.h3
              variants={fadeLeft(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
            >
              A dedicated{" "}
              <span className="text-primary">Frontend Developer</span> focused
              on building meaningful web experiences.
            </motion.h3>

            <motion.p
              variants={fadeLeft(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Hi! I'm{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Mohamed Fadel
              </span>
              , a Frontend Developer who has developed practical skills through
              focused learning and hands-on project work. I enjoy turning ideas
              into modern, responsive, and functional web applications.
            </motion.p>

            <motion.p
              variants={fadeLeft(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I work with JavaScript, React, and Tailwind CSS, and have built
              projects involving reusable components, routing, state management,
              API integration, and interactive e-commerce experiences. My focus
              is on writing maintainable code and creating interfaces that work
              smoothly across devices.
            </motion.p>

            <motion.p
              variants={fadeLeft(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I'm also expanding my knowledge of Next.js and backend
              fundamentals, including server-side functionality and database
              integration. I believe in continuous learning, practical
              problem-solving, and improving with every project I build.
            </motion.p>

            <motion.div
              variants={fadeLeft(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {["JavaScript", "React", "Tailwind CSS", "Next.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm font-medium
                      bg-primary/10 text-primary
                      border border-primary/20"
                  >
                    {tech}
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Profile information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {profileInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeRight(item.delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="min-w-0 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5
                  border border-gray-100 dark:border-gray-700/50
                  hover:border-primary/40 transition-colors duration-300"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.label}
                </p>

                <p
                  title={item.truncate ? item.value : undefined}
                  className={`font-semibold text-gray-900 dark:text-white ${
                    item.truncate ? "truncate" : ""
                  }`}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <motion.h3
            variants={fadeLeft(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center"
          >
            My <span className="text-primary">Skills</span>
          </motion.h3>

          <motion.p
            variants={fadeLeft(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Technologies and practical skills I've developed through learning
            and building web applications.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={fadeUp(index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6
                  border border-gray-100 dark:border-gray-700/50
                  hover:border-primary dark:hover:border-primary
                  hover:shadow-[0_0_25px] hover:shadow-primary/20
                  transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 bg-primary/10 text-primary rounded-xl
                    flex items-center justify-center mb-4
                    group-hover:scale-110 group-hover:bg-primary
                    group-hover:text-white transition-all duration-300"
                >
                  {skill.icon}
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
