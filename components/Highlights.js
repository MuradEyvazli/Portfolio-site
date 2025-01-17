"use client";

import { motion } from "framer-motion";
import { HyperText } from "./ui/hyper-text";
import Link from "next/link";
import Image from "next/image";
import {features} from "../data/features";


export default function Highlights() {

  return (
    <section className="py-16 px-4 text-center bg-gray-900 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link  className="flex justify-center mb-10 text-center items-center" href="/" onClick={() => setOpen(false)}>
            <Image 
              src="/assets/logo.jpg" 
              alt="Logo" 
              width={42} 
              height={42} 
              className=" rounded-md tezt-transform hover:scale-110 transition duration-300 ease-in-out " 
              priority
            />
          </Link>
       <HyperText className="flex text-white text-center justify-center" text="Öne Çıkan Özelliklerim"/> 
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Yazılım geliştirmede frontend ve backend’i birlikte ele alırken, bulut
        altyapısı ve güvenlik önlemlerini de göz önünde bulundurarak tam
        kapsamlı çözümler üretiyorum. UI/UX tasarımına duyduğum ilgi sayesinde,
        kullanıcı odaklı ve modern arayüzler oluşturuyorum.
      </motion.p>

      {/* Kartlar */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {feat.icon}
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              {feat.title}
            </h3>
            <p className="text-sm text-gray-300">{feat.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 max-w-4xl mx-auto grid gap-8 sm:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl text-cyan-400 font-extrabold">
            42 +
          </span>
          <p className="text-gray-200">Tamamlanan Proje</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl text-cyan-400 font-extrabold">
            3
          </span>
          <p className="text-gray-200">Staj / İş Deneyimi (Yıl)</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl text-cyan-400 font-extrabold">
            5 +
          </span>
          <p className="text-gray-200">Programlama Dili / Teknoloji</p>
        </div>
      </motion.div>

      
    </section>
  );
}
