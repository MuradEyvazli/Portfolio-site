"use client";

import { motion } from "framer-motion";
import { HyperText } from "./ui/hyper-text";

export default function GitHubStats() {
  return (
    <section className="text-center py-16 px-8 bg-gradient-to-r from-cyan-900 via-gray-800 to-black text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <HyperText className="flex text-white text-center justify-center" text="GitHub Board"/> 
      </motion.h2>

      <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        GitHub üzerindeki katkılarımı (contributions), istatistiklerimi ve dillerimi burada görebilirsiniz.
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between mx-auto max-w-7xl">
        {/* Left Sidebar */}
        <motion.div
          className="flex flex-col gap-6 w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/70 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contributions</h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=MuradEyvazli&show_icons=true&theme=react"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:w-1/3 gap-8 items-center">
          {/* Most Used Languages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">En Çok Kullanılan Diller</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=MuradEyvazli&layout=compact&theme=react"
              alt="Top Languages"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* GitHub Streak Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">GitHub Streak</h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=MuradEyvazli&theme=react"
              alt="GitHub Streak Stats"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-1/3 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/70 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">More Info</h3>
            <p className="text-gray-300">
              These stats show your overall GitHub contributions, most used languages in your repositories, and your current GitHub streak.
            </p>
            <div className=" justify-center text-center flex gap-4 mt-4">
            
              <motion.a
                  href="/projects"
                  className="px-6 py-3 rounded-md bg-cyan-500 text-gray-900 font-semibold hover:bg-cyan-400 transition shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit My Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-gray-900 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
