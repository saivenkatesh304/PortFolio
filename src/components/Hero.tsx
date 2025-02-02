import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sai Venkatesh
          </span>
        </h1>
        <p className="text-gray-400 text-xl mb-8">Computer Science Stutent</p>
        <div className="flex justify-center space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/saivenkatesh304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/sai-venkatesh-2668452a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/sai_venkatesh04?igsh=bmRhYnI5bjRoMXdw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;