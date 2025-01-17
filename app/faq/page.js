"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // API'den veriyi çekmek için useEffect kullanıyoruz
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs");
        const data = await response.json();
        setFaqs(data); // API'den gelen veriyi state'e kaydediyoruz
      } catch (error) {
        console.error("FAQ'lar çekilemedi:", error);
      } finally {
        setLoading(false); // Veri çektikten sonra loading'i false yapıyoruz
      }
    };

    fetchFaqs(); // API'yi çağırıyoruz
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Eğer veri çekiliyorsa "Loading..." mesajı gösterilecek
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
          Sık Sorulan Sorular
        </h2>
        
        <div className="space-y-8">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-2xl"
              initial={{ opacity: 0, y: -20 }} // Başlangıçta görünmez ve yukarıdan gelir
              animate={{ opacity: 1, y: 0 }} // Animasyon tamamlandığında görünür olur
              transition={{ duration: 0.5 }} // 0.5 saniye süren animasyon
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-cyan-400">
                  {faq.question}
                </h3>
                <motion.div
                  className="text-gray-300 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
