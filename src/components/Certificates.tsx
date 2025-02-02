import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  "NSIC Data Science Using Python",
  "Coursera Machine Learning specialization by Stanford University",
  "PupilFirst Web Development",
  "AICTE EduSkills AI ML Virtual Internship",
  "CodersCave and Codsoft Internship Certificates"
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Award className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-white">{certificate}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;