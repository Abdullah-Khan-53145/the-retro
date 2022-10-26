import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
function Home() {
  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
