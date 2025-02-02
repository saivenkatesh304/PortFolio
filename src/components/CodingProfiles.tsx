import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const profiles = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/saiv14076/",
    stats: "Rank- 347,641 | Solved 290+ problems | 3 Badges"
  },
  {
    platform: "HackerRank",
    url: "https://www.hackerrank.com/profile/saiv14076",
    stats: "3 Badges | 3 Certificates"
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/saiv2003",
    stats: "Active Participant"
  },
  {
    platform: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/user/saiv11s2x/",
    stats: "Regular Contributor"
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Coding Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Code2 className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{profile.platform}</h3>
                  <p className="text-gray-400">{profile.stats}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;