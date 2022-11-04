import React from "react";
import HomeHeroSection from "./HomeHeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Bannar from "./Bannar";
import Footer from "./Footer";
function Home() {
  const shoeDummyData = [
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "imgs/front-page-shoes/shoe_1.png",
      description:
        "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
      rating: "4.6",
      price: "56.25",
    },
    {
      name: "Nike Men's Running Shoe",
      img: "./imgs/front-page-shoes/shoe_2.png",
      description:
        "Give strength to your step with the Nike Air Zoom Pegasus 37 shoe. Ensuring the fit loved by the runners, the shoe is equipped with a brand new cushioning unit on the forefoot and foam for maximum responsiveness. The result is a durable and lightweight shoe designed for your everyday runs. Nike React foam in the midsole for lightness, elasticity and durability. More foam means more cushioning, no bulk. The Air Zoom unit in the forefoot is twice as large as previous versions, thus offering greater elasticity at each step. It is closer to the foot for better responsiveness.",
      rating: "4.5",
      price: "235.94",
    },
    {
      name: "Skechers Men's Go Walk Max-athletic Air Mesh Slip on Walking Shoe",
      img: "./imgs/front-page-shoes/shoe_3.png",
      description:
        "Get the maximum comfort and cushioning for athletic walking with the Skechers go walk max. Mesh fabric upper with cushioned, supportive sole design. Designed with Skechers performance technology and materials specifically for athletic walking. Goga max technology insole with high-rebound cushioning. The company's success stems from it's high quality, diversified, and affordable product line that meets consumers' Various lifestyle needs. Since it's inception in 1992, the Skechers diverse product offering has grown from utility style boots to include seven Skechers brands and five uniquely branded fashion lines for men and women. Skechers is an award-winning global leader in lifestyle footwear offering shoes that appeal to trend-savvy men, women and kids everywhere. The brand's styles include the latest innovative athletic, casual and fashion sneakers as well as sandals and boots—with many collections featuring Skechers air-cooled memory foam insoles for added comfort. Plus, Skechers offers a range of slip-resistant work FOOTWEAR for men and women, as well as cool, fun, playful and lighted styles that boys and girls love. Always ahead of the fashion curve, Skechers has made its sport, casual and dress casual shoes essential to every closet.",
      rating: "4.5",
      price: "102.16",
    },
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "./imgs/front-page-shoes/shoe_4.png",
      description:
        "These men's adidas running shoes make comfort the top priority. A stretchy upper gives them a sock-like feel, and the Cloudfoam midsole delivers pillow-soft comfort. The step-in design keeps things casual.",
      rating: "4.5",
      price: "129.00",
    },
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "./imgs/front-page-shoes/shoe_1.png",
      description:
        "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
      rating: "4.6",
      price: "56.25",
    },
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "/imgs/front-page-shoes/shoe1.png",
      description:
        "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
      rating: "4.6",
      price: "56.25",
    },
  ];
  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts shoes={shoeDummyData} />
      <HotDeals shoes={shoeDummyData} />
      <Bannar />
      <Footer />
    </div>
  );
}

export default Home;
