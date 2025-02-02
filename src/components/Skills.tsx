import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  "Programming Languages": ["Python", "Java", "C", "C#"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  "Databases": ["SQL","MongoDB"],
  "Algorithms & Data Structures": ["Data Structures", "Algorithms", "Dynamic Programming"],
  "Technologies & Tools": ["Machine Learning", "Git", "Visual Studio"],
  "Frameworks": ["Flask", "Pytorch", "Tensorflow"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-500">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;