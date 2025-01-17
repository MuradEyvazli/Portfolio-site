"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 1) react-hot-toast import
import { toast } from "react-hot-toast";

export default function ContactPage() {
  // Form verileri
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  // Yükleniyor mu?
  const [loading, setLoading] = useState(false);

  // Form alanları değiştikçe veriyi güncelle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Örnek: /api/contact endpoint’ine POST isteği
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Sunucudan JSON yanıtı oku
      const data = await response.json();

      if (!response.ok) {
        // Sunucu bir hata döndürdüyse
        toast.error(data.error || "Mail gönderilirken hata oluştu.");
      } else {
        // Başarılı
        toast.success("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("İstek atılırken hata:", error);
      toast.error("Beklenmeyen bir hata oluştu. Lütfen sonra tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
      <Link  className="flex justify-center mb-10 text-center items-center" href="/">
            <Image 
              src="/assets/logo.jpg" 
              alt="Logo" 
              width={42} 
              height={42} 
              className=" rounded-md tezt-transform hover:scale-110 transition duration-300 ease-in-out " 
              priority
            />
          </Link>
        
        {/* Başlık */}
        <motion.h2
          className="text-4xl md:text-5xl text-center font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          İletişim
        </motion.h2>
        
        {/* Ana Grid: Sol (Form & Ek Bilgiler) - Sağ (Baku Info & Harita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Sol Sütun */}
          <motion.div
            className="flex flex-col justify-start gap-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Form Kartı */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Bize Ulaşın
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* İsim */}
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    İsim
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full p-2 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız"
                    required
                  />
                </div>
                
                {/* E-posta */}
                <div>
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full p-2 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Adresiniz"
                    required
                  />
                </div>
                
                {/* Mesaj */}
                <div>
                  <label htmlFor="message" className="block mb-1 font-semibold">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-2 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-500"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesajınız"
                    required
                  />
                </div>
                
                {/* Gönder Butonu */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-cyan-500 rounded-xl text-gray-900 font-semibold hover:bg-cyan-400 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Gönderiliyor..." : "Gönder"}
                </motion.button>
              </form>
            </div>

            {/* Ek Bilgiler Kartı */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
              <h4 className="text-lg font-semibold mb-3 text-cyan-400">Bilgilerim</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>Email:</strong> muradeyvazli18@mail.com
                </li>
                <li>
                  <strong>Telefon:</strong> +90 536 996 54 84
                </li>
                <li>
                  <strong>Adres:</strong>Isparta/Merkez Modernevler 3127
                </li>
              </ul>
              
              
            </div>
          </motion.div>

          {/* Sağ Sütun */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Bakü Bilgi Kartı */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-2xl flex-1 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
                Baku, Azerbaycan
              </h3>
              <p className="flex-1 text-gray-300 leading-relaxed">
                Benim doğduğum ve yaşadığım şehir olan Bakü, Hazar Denizi kıyısında
                yer alan, kültürel zenginlikleri ve modern mimarisiyle ünlü bir 
                başkenttir. Burada bulunan tarihi surlar, Şirvanşahlar Sarayı gibi 
                geçmişin izlerini görebileceğiniz birçok yapıyı ziyaret edebilirsiniz.
              </p>
            </div>

            {/* Harita */}
            <div className="flex-1 rounded-lg overflow-hidden shadow-2xl">
              <motion.div
                className="w-full h-full rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8962058263816!2d49.86955657633665!3d40.409261037091576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063abfab07fed%3A0x112777f058bb6f60!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2str!4v1691491158700!5m2!1sen!2str"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
