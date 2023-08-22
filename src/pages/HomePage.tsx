import React from 'react'
import Header from '../components/Header'
import AdsGroup from '../components/AdsGroup'
import HomeBanner from '../components/HomeBanner'
import FlashDeals from '../components/FlashDeals'
import ProductTab from '../components/ProductTab'
import BestSeller from '../components/BestSeller'
import HomePageBanner from '../components/HomePageBanner'
import Releases from '../components/Releases'
import Container from '../components/Container'
import Category from '../components/Category'
import BannerFooter from '../components/BannerFooter'
import ProductMore from '../components/ProductMore'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'

function HomePage() {
  return (
    <div>
      <Header/>
      <SideBar/>
      <AdsGroup/>
      <HomeBanner/>
      <FlashDeals/>
      <ProductTab/>
      <BestSeller/>
      <HomePageBanner/>
      <Releases/>
      <Container/>
      <Category/>
      <BannerFooter/>
      <ProductMore/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default HomePage