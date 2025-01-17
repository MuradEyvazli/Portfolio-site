
import Footer from '@/components/Footer';
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'Murad Eyvazli',
  description: 'Kişisel Portföy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="relative text-white bg-gray-900">
        <Header />
        
        <main className="pt-16">
          {children}
          <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Footer/>
        </main>
      </body>
    </html>
  )
}
