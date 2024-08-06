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

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hepsiburada</title>
        
      </Head>
      <Header />
      <Navbar />
      <MainSlider />
      <DealOfTheDay />
      <SfBanner />
      <ThumbnailSlider />
      <FeatureList />
      <ReviewArea />
      <PreferredArea />
      <ProductArea />
    </Layout>
  )
}