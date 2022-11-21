import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Bannar from "./Bannar";
import { useEffect } from "react";
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
