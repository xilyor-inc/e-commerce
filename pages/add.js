import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import Header from './components/Header'
import MobileHeader from './components/MobileHeader'
import Navbar from './components/Navbar'
import AdminAddProduct from './components/AdminAddProduct'
import ProductManagement from './components/ProductManagement'

// Custom hook for screen size detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>
        <title>Hepsiburada</title>
      </Head>
      
      {isMobile ? <MobileHeader /> : <Header />}
      <Navbar />

      <main className={isMobile ? 'mobile-container' : 'desktop-container'}>
        <AdminAddProduct />
        <ProductManagement />
      </main>

      <style jsx>{`
        .mobile-container {
          padding: 10px;
        }
        .desktop-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </Layout>
  )
}