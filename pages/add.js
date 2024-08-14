import Head from 'next/head'
import Layout from './components/Layout'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainSlider from './components/MainSlider'
import DealOfTheDay from './components/DealOfTheDay'
import SfBanner from './components/SfBanner'
import ThumbnailSlider from './components/ThumbnailSlider'
import FeatureList from './components/FeatureList'
import ReviewArea from './components/ReviewArea'
import PreferredArea from './components/PreferredArea'
import ProductArea from './components/ProductArea'
import AdminAddProduct from './components/AdminAddProduct'
import ProductManagement from './components/ProductManagement'
export default function Home() {
  return (
    <Layout>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"/>
        <title>Hepsiburada</title>
        
      </Head>
      <Header />
      <Navbar />
      <AdminAddProduct />
      <ProductManagement />
    </Layout>
  )
}