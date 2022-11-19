import React from "react";
import { useEffect, useState } from "react";
import "../Styles/allproducts.css";

function AllProducts() {
  const filterObj = {
    colors: [
      "white",
      "black",
      "green",
      "navy",
      "red",
      "yellow",
      "brown",
      "orange",
      "gray",
      "white",
      "black",
      "green",
      "navy",
    ],
    sizes: [
      4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      12.5, 13, 14, 15, 16, 17, 18, 19,
    ],
    brands: ["Addidas", "Nike", "Under Haumour", "Puma"],
  };
  const shoe = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [position, setPosition] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >=
        document.querySelector(".all_products_filter").offsetTop
      ) {
        setPosition({ position: "fixed", top: 0 });
      } else if (
        window.scrollY <
        document.querySelector(".all_products_filter").offsetTop
      ) {
        setPosition({ position: "absolute", top: 0 });
      }
      if (
        window.scrollY >=
        document.querySelector(".all_products_filter").offsetTop +
          document.querySelector(".all_products_filter").offsetHeight -
          window.innerHeight
      ) {
        setPosition({ position: "absolute", bottom: 0 });
      }
    });
  }, []);
  return (
    <div className="all_products_main">
      <div className="all_products_main_child">
        <div className="all_products_filter">
          <div className="all_products_filter_child" style={position}>
            <div className="all_products_filter_heading">
              <h2>Filters</h2>
              <div className="all_products_filter_heading_image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
            </div>
            <div className="all_products_filter_price all_products_filter_section">
              <h3>Price</h3>
              <div className="all_products_filter_price_range">
                <input type="number" placeholder="Min" name="" id="" />
                <input type="number" placeholder="Max" name="" id="" />
              </div>
            </div>
            <div className="all_products_filter_sizes all_products_filter_section">
              <h3>Size</h3>
              <div className="all_products_filter_size_range">
                {filterObj.sizes.map((size, index) => (
                  <div className="dis_con size" key={index}>
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="all_products_filter_colors all_products_filter_section">
              <h3>Colors</h3>
              <div className="all_products_filter_color_range">
                {filterObj.colors.map((color, index) => (
                  <div
                    className="dis_con color"
                    key={index}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="all_products_filter_brands all_products_filter_section">
              <h3>Brands</h3>
              <div className="all_products_filter_brand_range">
                {filterObj.brands.map((brand, index) => (
                  <div className="brand" key={index}>
                    <p>{brand}</p>
                    <input type="checkbox" name="" id="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="all_products_products">
          {shoe.map((num, index) => (
            <div className="all_products_product_main" key={index}>
              <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
              <div className="all_products_product_info">
                <h3>Under Armour Men's Charged Assert 9 Running Shoe</h3>
                <div className="product_name_brand">
                  <h4>Under Armour</h4>
                  <span>$56.25</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
