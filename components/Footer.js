
"use client";

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900/70 border-t border-gray-800 mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-6xl py-4 px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Murad Eyvazli. Tüm hakları saklıdır.
        </p>
      </div>
    </motion.footer>
  )
}
