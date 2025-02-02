import React from 'react';
import { motion } from 'framer-motion';
import IMG1 from './IMG1.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={IMG1}
              alt="Profile"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
            Hi! I'm Sai Venkatesh, a B.Tech Computer Science (AIML) student at the Institute of Aeronautical Engineering, Hyderabad. I’m passionate about full-stack development and love coding innovative solutions. I enjoy exploring new technologies, frameworks, and tools to stay ahead in the ever-evolving tech world. With skills in Python, Java, JavaScript, React, Flask, and SQL, I build efficient and scalable applications. I'm always eager to learn, experiment, and push boundaries to create impactful digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About