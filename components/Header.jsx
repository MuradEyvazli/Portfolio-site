"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Faq", href: "/faq" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact" },
  ];

  const underlineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur border-b border-gray-700">
      
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        
     
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" onClick={() => setOpen(false)}>
            <Image 
              src="/assets/logo.jpg" 
              alt="Logo" 
              width={42} 
              height={42} 
              className="mt-2 rounded-md" 
              priority
            />
          </Link>
          
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.label}
                className="relative group"
                
                whileHover="hover"
                initial="initial"
                animate={isActive ? "hover" : "initial"}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {item.label}
                </Link>
      
                <motion.span
                  variants={underlineVariants}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 -bottom-1 h-[2px] bg-cyan-300"
                />
              </motion.div>
            );
          })}
        </div>

    
        <div className="md:hidden">
          <motion.button
            className="text-gray-300 hover:text-cyan-300"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            {open ? (
              
              <svg
                className="w-6 h-6"
                fill="none" stroke="currentColor"
                strokeWidth="2" viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              
              <svg
                className="w-6 h-6"
                fill="none" stroke="currentColor"
                strokeWidth="2" viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden bg-gray-800/90 backdrop-blur px-4 pt-2 pb-4 text-center flex flex-col space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.label}
                  className="relative group"
                  whileHover="hover"
                  initial="initial"
                  animate={isActive ? "hover" : "initial"}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-200 hover:text-cyan-300 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <motion.span
                    variants={underlineVariants}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 -bottom-1 h-[2px] bg-cyan-300"
                  />
                </motion.div>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
