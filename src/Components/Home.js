import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Bannar from "./Bannar";
function Home() {
  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts />
      <HotDeals />
      <Bannar />
    </div>
  );
}

export default Home;
