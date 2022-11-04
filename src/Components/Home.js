import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Bannar from "./Bannar";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts />
      <HotDeals />
      <Bannar />
      <Footer />
    </div>
  );
}

export default Home;
