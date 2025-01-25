"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mockups = [
  {
    id: 1,
    title: "Work desktop",
    image: "/assets/mockup/mockup3.png",
    description: "A stylish preview of my custom logo in a modern environment."
  },
  {
    id: 2,
    title: "Personalize Your MacbooK",
    image: "/assets/mockup/mockup4.png",
    description: "Clean and minimalistic showcase of the logo on different surfaces."
  },
  {
    id: 3,
    title: "No Problem With Print",
    image: "/assets/mockup/mockup1.png",
    description: "A bold representation of the brand identity on signage."
  },
  {
    id: 4,
    title: "A Professional Look",
    image: "/assets/mockup/mockup2.png",
    description: "Professional mockup highlighting color and branding consistency."
  },
];

const page = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Intro Section: brand/logo info */}
      <motion.div
        className="max-w-4xl mx-auto px-4 pt-16 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My Brand & Logo
        </h1>
        <p className="text-gray-300 md:text-lg">
          Welcome to a showcase of my logo and its variations across different 
          mockups. Scroll down to see how my brand identity comes to life 
          in real-world settings.
        </p>
      </motion.div>

      {/* Mockups Section */}
      <div className="mt-12 space-y-16">
        {mockups.map((mockup) => (
          <section key={mockup.id} className="max-w-6xl mx-auto px-4">
            {/* Image with fade-up on scroll */}
            <motion.div
              className="relative w-full h-[70vh] md:h-[70vh]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // animates only once
            >
              <Image
                src={mockup.image}
                alt={mockup.title}
                fill
                priority={mockup.id === 1} // optionally prioritize first image
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>

            {/* Title and description, centered */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} // animates only once
            >
              <h3 className="text-2xl font-semibold text-white mt-14">
                {mockup.title}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {mockup.description}
              </p>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Spacing at the bottom */}
      <div className="h-16" />
    </div>
  );
};

export default page;
