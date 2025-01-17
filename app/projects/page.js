"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/project';

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Header with animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-900/40 rounded-lg shadow-lg p-4 border border-gray-800 hover:-translate-y-1 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-400 text-sm mb-4">{project.about}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-end text-cyan-400 hover:text-cyan-500 transition"
              >
                <FaGithub className="w-5 h-5" /> GitHub Repo
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Centered Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href="https://github.com/MuradEyvazli?tab=overview&from=2025-01-01&to=2025-01-18"
          target='_blank'
          className="flex justify-center px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-gray-900 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Diger Projelerim...
        </motion.a>
      </motion.div>
    </div>
  );
}
