import React, { useEffect } from "react";
import HomeHeroSection from "./HomeHeroSection";
import Loader from "./Loader";
const Brands = React.lazy(() => import("./Brands"));
const HotDeals = React.lazy(() => import("./HotDeals"));
const Bannar = React.lazy(() => import("./Bannar"));
const FeaturedProducts = React.lazy(() => import("./FeaturedProducts"));
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HomeHeroSection />
      <React.Suspense fallback={<Loader />}>
        <Brands />
      </React.Suspense>
      <React.Suspense fallback={<Loader />}>
        <FeaturedProducts />
      </React.Suspense>
      <React.Suspense fallback={<Loader />}>
        <HotDeals />
      </React.Suspense>
      <React.Suspense fallback={<Loader />}>
        <Bannar />
      </React.Suspense>
    </div>
  );
}

export default Home;
