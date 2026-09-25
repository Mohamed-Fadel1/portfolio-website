import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 98 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST APIs", level: 82 },
  ];

  return (
    <section id="skills" className="container pt-10 pb-20">
      {/* Title */}
      <div className="group w-fit mx-auto pb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
          My <span className="text-primary">Skills</span>
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-4 max-w-2xl mx-auto">
          Technologies and tools I use on a daily basis.
        </p>
        <span className="block h-1 w-20 bg-linear-to-r from-primary to-violet-500 mx-auto mb-4 rounded-full transition-all duration-300 group-hover:w-40"></span>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-primary font-semibold text-sm">
                {skill.level}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-linear-to-r from-primary to-violet-500 h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
