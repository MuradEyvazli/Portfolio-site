"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaAward } from "react-icons/fa";

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2019",
      icon: <FaGraduationCap className="text-cyan-300 w-6 h-6" />,
      title: "Lise Mezuniyeti (Azerbaycan)",
      description:
        "Tebriz (Tbh) Secondary School ve 47th Secondary School’da eğitimimi başarıyla tamamladım (GPA: 5/5).",
    },
    {
      year: "2021",
      icon: <FaGraduationCap className="text-cyan-300 w-6 h-6" />,
      title: "Üniversite Başlangıcı",
      description:
        "Suleyman Demirel University, Isparta - Bilgisayar Mühendisliği bölümünde lisans eğitimine başladım (GPA ~2.93).",
    },
    {
      year: "2024",
      icon: <FaBriefcase className="text-cyan-300 w-6 h-6" />,
      title: "Digital Umbrella (Azerbaycan) Stajı",
      description:
        "3 aylık Yazılım Geliştirici Stajı (Haziran-Ağustos). React.js, Node.js, Next.js, MongoDB ve Express.js ile projelerde görev aldım.",
    },
    {
      year: "2024",
      icon: <FaCode className="text-cyan-300 w-6 h-6" />,
      title: "Projeler: Glamorize AI & Auto Trashers",
      description:
        "Glamorize AI (Virtual Try-On) ve Auto Trashers Rent-a-Car gibi projelerde frontend & backend geliştirme, UI/UX tasarımı ve takım çalışması deneyimi edindim.",
    },
    {
      year: "2025",
      icon: <FaAward className="text-cyan-300 w-6 h-6" />,
      title: "Beklenen Mezuniyet",
      description:
        "Bilgisayar Mühendisliği Lisans Derecesini tamamlamayı hedefliyorum. Sonraki adım: yüksek lisans ve kariyer yenilikçi projeler.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Yolculuğum
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Simge */}
            <div className="mt-1">{event.icon}</div>
            {/* İçerik */}
            <div>
              <h3 className="text-md font-sans text-cyan-400">
                {event.year} - {event.title}
              </h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
