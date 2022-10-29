import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
function Home() {
  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts />
      <HotDeals />
    </div>
  );
}

export default Home;
