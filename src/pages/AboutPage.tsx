import React from "react";
import AboutUs from "../layouts/AboutUs";
import Header from "../components/Header";
import BannerFooter from "../components/BannerFooter";
import ProductMore from "../components/ProductMore";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      {" "}
      <Header />
      <AboutUs/>
      <BannerFooter />
      <ProductMore />
      <Feature />
      <Footer />
    </div>
  );
}

export default AboutPage;
