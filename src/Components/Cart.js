import React, { useState } from "react";
import "../Styles/cart.css";
function Cart() {
  const [mainHeading, setMainHeading] = useState(
    window.innerWidth >= 756
      ? "./imgs/your_cart_heading.png"
      : "./imgs/your_cart_heading_mob.png"
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 756) {
      setMainHeading("./imgs/your_cart_heading.png");
    } else {
      setMainHeading("./imgs/your_cart_heading_mob.png");
    }
  });
  const products = [
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "imgs/front-page-shoes/shoe_1.png",
      price: 56.25,
      qty: 1,
      color: "red",
    },
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "imgs/front-page-shoes/shoe_1.png",
      price: 56.25,
      qty: 1,
      color: "red",
    },
    {
      name: "Under Armour Men's Charged Assert 9 Running Shoe",
      img: "imgs/front-page-shoes/shoe_1.png",
      price: 56.25,
      qty: 1,
      color: "red",
    },
  ];
  window.addEventListener("resize", () => {
    document.querySelector(".test").innerText = window.innerWidth;
  });
  return (
    <div className="cart_main">
      <div className="cart_main_child">
        <div className="cart_main_child_heading">
          <img src={mainHeading} alt="" />
        </div>

        <div className="cart_main_child_cart">
          {products.map((product, index) => (
            <div className="cart_item" key={index}>
              <div className="cart_product_img_name_color">
                <img src={product.img} alt="" />
                <div className="cart_product_name_color">
                  <h3>{product.name}</h3>
                </div>
              </div>
              <div className="cart_product_qty_price">
                <div className="qty">
                  <button>+</button>
                  <span>{product.qty}</span>
                  <button>-</button>
                </div>
                <h3>${product.price}</h3>
              </div>
              <div className="cart_close">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          ))}
          <div className="cart_total_bill">
            <div className="total_bill">
              <h3>
                Sub Total : <span>$2999</span>
              </h3>
              <h3>
                Shippinh : <span>$29</span>
              </h3>
              <button className="primary-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
