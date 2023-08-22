import React from 'react';
import Header from './components/Header';
import AdsGroup from './components/AdsGroup';
import HomeBanner from './components/HomeBanner';
import FlashDeals from './components/FlashDeals';
import ProductTab from './components/ProductTab';
import BestSeller from './components/BestSeller';
import HomePageBanner from './components/HomePageBanner';
import Releases from './components/Releases';
import Container from './components/Container';
import Category from './components/Category';
import BannerFooter from './components/BannerFooter';
import ProductMore from './components/ProductMore';
import Feature from './components/Feature';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PageOrder from './pages/PageOrder';

function App() {
  return (
    <div className="wrappage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<PageOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <HomePage/> */}
      {/* <NotFound/> */}
    </div>
  );
}

export default App;
