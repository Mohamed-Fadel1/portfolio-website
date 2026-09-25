import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import linkedinIcon from "../assets/linkedin.svg";
import heroImg from "../assets/boy.jpg";

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

  return (
    <section
      id="hero"
      className="overflow-hidden container grid grid-cols-1 lg:grid-cols-2 items-center py-10 gap-10 md:gap-16 justify-center mx-auto min-h-screen"
    >
      {/* left section */}
      <div className="w-full space-y-5 text-center md:text-left relative">
        <div className="absolute -top-30 -left-40 w-70 h-70 dark:bg-primary/40 blur-3xl animate-pulse"></div>

        {/* 🟢 Availability badge */}
        <motion.span
          variants={fadeLeft(0.1)}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-2 bg-primary/30 w-fit rounded-full py-1 px-4 text-sm dark:text-primary m-auto md:m-0"
        >
          <span className="bg-green-500 w-2 h-2 rounded-full"></span>
          Available for work
        </motion.span>

        <motion.h1
          variants={fadeLeft(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight"
        >
          Hi, i'm{" "}
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

        {/* 🟢 Frontend Developer */}
        <motion.h4
          variants={fadeLeft(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-xl md:text-2xl text-primary font-mono"
        >
          &lt; <span>Frontend Developer</span> /&gt;
        </motion.h4>

        {/* 🟢 desc */}
        <motion.p
          variants={fadeLeft(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0"
        >
          I build modern, responsive, and user-friendly web applications using
          React, Tailwind CSS, and the latest frontend technologies. Passionate
          about clean code and beautiful UI.
        </motion.p>

        <motion.div
          variants={fadeLeft(0.5)}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-center md:justify-start gap-6 md:gap-10 text-center"
        >
          <div className="flex flex-col">
            <span className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl">
              +3
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
              Years Experience
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl">
              +15
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl">
              +10
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">
              Happy Clients
            </p>
          </div>
        </motion.div>

        {/* 🟢 Buttons */}
        <motion.div
          variants={fadeLeft(0.6)}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full cursor-pointer hover:shadow-[0_0_8px] hover:bg-primary duration-200 transition-all shadow-lg font-medium">
            <Download size={18} />
            Download CV
          </button>

          <button className="flex items-center gap-2 bg-transparent border-2 border-primary px-5 py-2.5 rounded-full cursor-pointer text-primary dark:text-white dark:border-primary hover:shadow-[0_0_8px] hover:bg-primary hover:text-white duration-200 transition-all font-medium">
            <Mail size={18} />
            Hire Me
          </button>

          {/* svg linked in */}
          <a
            href="https://www.linkedin.com/in/mohamed-fadel-709a542a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group w-11 h-11 flex items-center justify-center rounded-full
              border-2 border-primary/30 dark:border-primary/40
              transition-all duration-300 hover:scale-105"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5 h-5 object-contain 
                opacity-70 dark:opacity-90
                transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>

      {/* right section - animation */}
      <motion.div
        variants={fadeRight(0.3)}
        initial="hidden"
        whileInView="show"
        className="relative flex justify-center items-center"
      >
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 
          bg-primary/30 dark:bg-primary/40 
          rounded-full blur-3xl animate-pulse"
        ></div>

        <img
          src={heroImg}
          alt="Mohamed Fadel"
          loading="lazy"
          className="relative w-64 h-64 md:w-80 md:h-80 
            rounded-full object-cover
            border-4 border-white dark:border-gray-800
            shadow-2xl shadow-primary/30
            hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
