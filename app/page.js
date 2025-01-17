"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Globe } from "@/components/ui/globe";
import Link from "next/link";
import Highlights from "@/components/Highlights";
import Bio from "@/components/Bio";
import Timeline from "@/components/Timeline";
import GitHubStats from "@/components/GitHubStats";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden  to-black text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
            {/* Left Side (Text) */}
            <motion.div
              className="text-center md:text-left mt-8 md:mt-0 md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Merhaba, <br className="block md:hidden" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-cyan-500">
                  Ben Murad Eyvazli <span className="text-white">!</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-sm text-gray-300 max-w-xl mb-8">
                Frontend ve Backend projeleri geliştiren bir yazılım geliştiricisiyim. Kullanıcı deneyimine ve modern teknolojilere odaklanarak projelerimi hayata geçiriyorum.
              </p>

              <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4">
                <motion.a
                  href="/projects"
                  className="px-6 py-3 rounded-md bg-cyan-500 text-gray-900 font-semibold hover:bg-cyan-400 transition shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Projelerimi İncele
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-gray-900 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  İletişime Geç
                </motion.a>
              </div>

              <motion.div
                className="mt-8 flex gap-6 justify-center sm:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Link href="https://github.com/MuradEyvazli" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    <FaGithub size={30} />
                  </motion.div>
                </Link>
                <Link href="https://www.linkedin.com/in/murad-eyvazli" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={30} />
                  </motion.div>
                </Link>
                <Link href="https://www.instagram.com/murad.eyvzli" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-pink-600 transition-colors"
                  >
                    <FaInstagram size={30} />
                  </motion.div>
                </Link>
                <Link href="https://www.facebook.com/people/Murad-Eyvazli" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-blue-700 transition-colors"
                  >
                    <FaFacebook size={30} />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-cyan-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  Hello World!
                </span>
                <Globe className="top-28" />
                <div className="pointer-events-none absolute inset-0 h-full " />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Highlights />
      <Bio />
      <Timeline />
      <GitHubStats />
    </main>
  );
}
