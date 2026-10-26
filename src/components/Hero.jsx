import { Download, Mail, Code2, Smartphone, Plug } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import linkedinIcon from "../assets/linkedin.svg";
import heroImg from "../assets/Neon Developer Workspace at Blue Hour.png";

const Hero = () => {
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

  const highlights = [
    { icon: Code2, label: "React & Next.js" },
    { icon: Smartphone, label: "Responsive UI" },
    { icon: Plug, label: "API Integration" },
  ];

  return (
    <section
      id="hero"
      className="container mx-auto grid min-h-screen grid-cols-1 items-center justify-center gap-10 overflow-hidden py-10 md:gap-16 lg:grid-cols-2"
    >
      {/* Left section */}
      <div className="relative w-full space-y-5 text-center md:text-left">
        <div className="absolute -top-30 -left-40 h-70 w-70 animate-pulse bg-primary/20 blur-3xl dark:bg-primary/40" />

        {/* Availability badge */}
        <motion.span
          variants={fadeLeft(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full bg-primary/30 px-4 py-1 text-sm text-primary md:mx-0"
        >
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={fadeLeft(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl"
        >
          Hi, I'm{" "}
          <span className="inline-block bg-linear-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: ["Mohamed Fadel"],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 40,
                pauseFor: 2000,
              }}
            />
          </span>
        </motion.h1>

        {/* Job title */}
        <motion.h2
          variants={fadeLeft(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-mono text-xl text-primary md:text-2xl"
        >
          &lt; <span>Frontend Developer</span> /&gt;
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeLeft(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:mx-0 md:text-base"
        >
          I’m a Frontend Developer focused on building modern, responsive, and
          user-friendly web applications with React, Next.js, and Tailwind CSS.
          I enjoy writing clean, maintainable code and creating intuitive user
          experiences.
        </motion.p>

        {/* Skills highlights */}
        <motion.div
          variants={fadeLeft(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2 md:justify-start"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-primary/50 dark:text-gray-200"
            >
              <Icon size={18} className="shrink-0 text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeLeft(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start"
        >
          <a
            href="/Mohamed-Fadel-CV.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-white shadow-lg transition-all duration-200 hover:shadow-[0_0_8px] hover:brightness-110"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="mailto:mf90705520@gmail.com"
            className="flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-5 py-2.5 font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white dark:text-white"
          >
            <Mail size={18} />
            Hire Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-fadel-709a542a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/30 transition-all duration-300 hover:scale-105 hover:border-primary dark:border-primary/40"
          >
            <img
              src={linkedinIcon}
              alt=""
              className="h-5 w-5 object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:opacity-90"
            />
          </a>
        </motion.div>
      </div>

      {/* Right section - image */}
      <motion.div
        variants={fadeRight(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute h-72 w-72 animate-pulse rounded-full bg-primary/30 blur-3xl dark:bg-primary/40 md:h-96 md:w-96" />

        <img
          src={heroImg}
          alt="Illustration representing Mohamed Fadel, Frontend Developer"
          fetchPriority="high"
          className="relative h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl shadow-primary/30 transition-transform duration-500 hover:scale-105 dark:border-gray-800 md:h-80 md:w-80"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
