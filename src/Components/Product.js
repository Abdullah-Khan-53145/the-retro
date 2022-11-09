import React from "react";
import "../Styles/product.css";
function Product() {
  const dummy_shoe = {
    name: "Under Armour Men's Charged Assert 9 Running Shoe",
    img: "imgs/front-page-shoes/shoe_1.png",
    description:
      "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
    rating: "4.6",
    price: "56.25",
    size: [1, 2, 3, 4, 5, 6, 7, 8],
    color: ["black", "red", "green"],
  };
  return (
    <div className="main_product">
      <div className="product_main_child">
        <div className="product_main_child_images_section">
          <div className="product_main_child_images_section_slider">
            <div className="left_arrow arrow">
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="main_product_image">
              <img src="./imgs/product-page-shoes/shoe_1_red_A.png" alt="" />
            </div>
            <div className="right_arrow arrow">
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="product_main_child_images_section_samples">
            <div className="shoe_sample_image">
              <img src="./imgs/product-page-shoes/shoe_1_red_A.png" alt="" />
            </div>
            <div className="shoe_sample_image">
              <img src="./imgs/product-page-shoes/shoe_1_red_B.png" alt="" />
            </div>
            <div className="shoe_sample_image">
              <img src="./imgs/product-page-shoes/shoe_1_red_C.png" alt="" />
            </div>
          </div>
        </div>
        <div className="product_main_child_Info_section">
          <div className="product_main_heading_and_info">
            <h1>{dummy_shoe.name}</h1>
            <p>{dummy_shoe.description}</p>
          </div>
          <div className="product_average_rating">
            <h3>Average Rating</h3>
            <p>⭐⭐⭐⭐⭐ {dummy_shoe.rating}</p>
          </div>
          <div className="product_sizes">
            <h3>Select Size</h3>
            <div className="product_size">
              {dummy_shoe.size.map((size) => (
                <div>{size}</div>
              ))}
            </div>
          </div>
          <div className="product_colors">
            <h3>Select colors</h3>
            <div className="product_color">
              {dummy_shoe.color.map((color) => (
                <div style={{ background: color }}></div>
              ))}
            </div>
          </div>
          <button className="primary-button">Add To Cart</button>
          <div className="realted_products">
            <h3>Related product</h3>
            <div className="related_products_parent">
              <div className="related_product">
                <h4>{dummy_shoe.name}</h4>
                <div className="product_details">
                  <div className="related_product_img">
                    <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
                  </div>
                  <div className="product_info">
                    <div className="product_description">
                      <p>
                        {dummy_shoe.description.length > 60
                          ? dummy_shoe.description.slice(0, 60) + " ..."
                          : dummy_shoe.description}
                      </p>
                    </div>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.rating}</span>
                    </div>
                    <div className="price">
                      <h5>{dummy_shoe.price}</h5>
                    </div>
                    <button className="primary-button">Buy Product</button>
                  </div>
                </div>
              </div>
              <div className="related_product">
                <h4>{dummy_shoe.name}</h4>
                <div className="product_details">
                  <div className="related_product_img">
                    <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
                  </div>
                  <div className="product_info">
                    <div className="product_description">
                      <p>
                        {dummy_shoe.description.length > 60
                          ? dummy_shoe.description.slice(0, 60) + " ..."
                          : dummy_shoe.description}
                      </p>
                    </div>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.rating}</span>
                    </div>
                    <div className="price">
                      <h5>{dummy_shoe.price}</h5>
                    </div>
                    <button className="primary-button">Buy Product</button>
                  </div>
                </div>
              </div>
              <div className="related_product">
                <h4>{dummy_shoe.name}</h4>
                <div className="product_details">
                  <div className="related_product_img">
                    <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
                  </div>
                  <div className="product_info">
                    <div className="product_description">
                      <p>
                        {dummy_shoe.description.length > 60
                          ? dummy_shoe.description.slice(0, 60) + " ..."
                          : dummy_shoe.description}
                      </p>
                    </div>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.rating}</span>
                    </div>
                    <div className="price">
                      <h5>{dummy_shoe.price}</h5>
                    </div>
                    <button className="primary-button">Buy Product</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
