"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaLaptopCode,
    FaCloud,
    FaShieldAlt,
    FaLightbulb,
    FaGlobe,
    FaLanguage,
  } from "react-icons/fa";

export default function Bio() {
  return (
    <section className="bg-gray-800 text-white py-16 px-4">
        
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
       
        <motion.div
          className="flex-1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            Kısaca Ben Kimim?
          </h2>
          <motion.div
        className=" mt-12 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start gap-3 mb-4">
          <FaLanguage className="text-cyan-300 w-6 h-6" />
          <h4 className="text-xl font-semibold text-cyan-300">Diller</h4>
        </div>
        <p className="text-gray-300">
          English, Turkish, Russian, Azerbaijani, Ukrainian
        </p>
      </motion.div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Merhaba! Ben <strong>Murad Eyvazli</strong>, 
            <em> Suleyman Demirel University, Isparta - Faculty of Computer Engineering</em>
            <span> </span>bölümünde eğitimine devam eden bir yazılım geliştiricisiyim. 
            <strong> 2025 Temmuz</strong> ayında mezun olmayı hedefliyorum. 
            Şu an Isparta/Merkez’de ikamet ediyorum.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
          JavaScript (React.js, Next.js,Node.js, Vue.js,Three.js), Swift, Redux ve MongoDB gibi 
            modern teknolojileri kullanarak, kullanıcı dostu ve 
            performanslı web projeleri geliştirmeye odaklanıyorum. 
            Aynı zamanda <strong>CI/CD, Docker, AWS</strong> gibi 
            Bulut ve DevOps süreçlerine de ilgim var. Bootstrap, Tailwind CSS, Responsive Design
            Backend Development: Node.js (Express.js, RESTful APIs), MongoDB, MySQL
            Version Control & Tools: Git, GitHub
            Build Tools: Webpack, Vite, Parcel
            UI/UX Design: Adobe Illustrator, Photoshop,blender, Figma
            Yazılım dünyasında yenilikçi çözümler üretmek, 
            sürekli öğrenmek ve öğrendiklerimi paylaşmak en büyük 
            motivasyon kaynaklarım.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Aşağıdaki bölümlerde projelerim, iş deneyimlerim ve 
            teknik becerilerim hakkında daha detaylı bilgilere 
            ulaşabilirsiniz. İletişim için bana 
            <strong> {`muradeyvazli18@gmail.com`} </strong> 
            adresinden veya sosyal medya hesaplarımdan 
            ulaşabilirsiniz.
          </p>
        </motion.div>
        
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-[400px] h-[400px] relative rounded-full overflow-hidden shadow-xl border-2 border-cyan-500 ">
            <Image
              src="/assets/profilee.jpg"
              alt="Murad Eyvazli"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        
        
      </div>
      
      
    </section>
  );
}
