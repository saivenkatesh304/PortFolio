import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const internships = [
  {
    title: "NSIC Virtual Internship | Data Science Using Python",
    duration: "Jul '17- Jul '31 2023",
    description: [
      "Used of Python Libraries and applied the same on real life Data Science projects.",
      "Data Analysis, Data Visualization, Machine learning, Programming in Python."
    ]
  },
  {
    title: "Google AIML Virtual Internship (AICTE) | AI/ML",
    duration: "Jul- Sept 2024",
    description: [
      "Completed Virtual Internship focused on Artificial intelligence and machine learning",
      "Gained hands-on experience with Google AI/ML tools, resources and platforms, enhancing skills in developing, deploying, and testing ML models."
    ]
  },
  {
    title: "CodersCave Virtual Internship | Web Development",
    duration: "May '3- Jun '3 2024",
    description: [
      "Developed an interface for Weather Dashboard using html,css and js which shows real time weather of any particular city."
    ]
  }
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Internship Experience
        </h2>
        <div className="grid gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{internship.title}</h3>
                  <p className="text-purple-400 mb-4">{internship.duration}</p>
                  <ul className="space-y-2">
                    {internship.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;