import Head from 'next/head'
import Layout from './components/Layout'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainSlider from './components/MainSlider'
import DealOfTheDay from './components/DealOfTheDay'
import SfBanner from './components/SfBanner'
import ThumbnailSlider from './components/ThumbnailSlider'
import FeatureList from './components/FeatureList'

import PreferredArea from './components/PreferredArea'
import ProductArea from './components/ProductArea'
import Firstp from './components/Firstp'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hepsiburada</title>
        
      </Head>
      <Header />
      <Navbar />
      <Firstp />    
      <PreferredArea />
      <ProductArea /> 
    </Layout>
  )
}