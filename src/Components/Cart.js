import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { reduceQtyAPI, removeFromCartAPI, addToCartAPI } from "../actions";

import "../Styles/cart.css";
function Cart({ removeFromCart, cartItems, reduceQtyFromCart, addToCart }) {
  const [mainHeading, setMainHeading] = useState(
    window.innerWidth >= 756
      ? "./imgs/your_cart_heading.png"
      : "./imgs/your_cart_heading_mob.png"
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [renderableCart, setRenderableCart] = useState(cartItems);
  // Funtions
  const getTotalPrice = () => {
    let caltotalPrice = 0;
    cartItems.forEach((item) => {
      caltotalPrice += item.price * item.qty;
    });
    setTotalPrice(caltotalPrice);
  };

  // Event Handlers
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  const handleReduceQty = (product) => {
    if (product.qty > 1) {
      reduceQtyFromCart(product);
    }
  };
  const handleIncreaseQty = (product) => {
    addToCart(product);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 756) {
      setMainHeading("./imgs/your_cart_heading.png");
    } else {
      setMainHeading("./imgs/your_cart_heading_mob.png");
    }
  });

  useEffect(() => {
    getTotalPrice();
    setRenderableCart(cartItems.sort((a, b) => a.index - b.index));
  }, [cartItems]);

  return (
    <div className="cart_main">
      <div className="cart_main_child">
        <div className="cart_main_child_heading">
          <img src={mainHeading} alt="" />
        </div>

        <div className="cart_main_child_cart">
          <div className="cart_item cart_items_heading">
            <div className="cart_product_img cart_item_detail">
              <h3>Img</h3>
            </div>
            <div className="cart_product_name cart_item_detail">
              <h3>Name</h3>
            </div>
            <div className="cart_product_color cart_item_detail">
              <h3>Color</h3>
            </div>
            <div className="cart_product_size cart_item_detail">
              <h3>Size</h3>
            </div>

            <div className="cart_product_qty cart_item_detail">
              <h3>Qty</h3>
            </div>
            <h3 className="cart_product_price cart_item_detail">Price</h3>

            <div className="cart_close"></div>
          </div>
          {renderableCart.length !== 0 ? (
            renderableCart.map((product, index) => (
              <div className="cart_item" key={index}>
                <div className="cart_product_img cart_item_detail cart_item_sap">
                  <img src={product.img} alt="" />
                </div>
                <div className="cart_product_name cart_item_detail cart_item_sap">
                  <p>{product.name}</p>
                </div>
                <div className="cart_product_color cart_item_detail cart_item_sap">
                  <span className="cart_item_title">Color: </span>{" "}
                  <p>{product.color}</p>
                </div>
                <div className="cart_product_size cart_item_detail cart_item_sap">
                  <span className="cart_item_title">Size: </span>
                  <p>{product.size}</p>
                </div>

                <div className="cart_product_qty cart_item_detail cart_item_sap">
                  <button onClick={() => handleReduceQty(product)}>-</button>
                  <p>{product.qty}</p>
                  <button onClick={() => handleIncreaseQty(product)}>+</button>
                </div>
                <p className="cart_product_price cart_item_detail cart_item_sap">
                  <span className="cart_item_title">Price: </span>$
                  {(product.price * product.qty).toFixed(2)}
                </p>

                <div className="cart_close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    onClick={() => handleRemoveFromCart({ ...product, index })}
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
            ))
          ) : (
            <h3>Cart empty</h3>
          )}
          <div className="cart_total_bill">
            <div className="total_bill">
              <h3>
                Sub Total : <span>${totalPrice.toFixed(2)}</span>
              </h3>
              <h3>
                Shipping : <span>${Math.floor(totalPrice * 0.2)}</span>
              </h3>
              <button className="primary-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.CartState,
});
const dispatchStateToProps = (dispatch) => ({
  removeFromCart: (payload) => dispatch(removeFromCartAPI(payload)),
  reduceQtyFromCart: (payload) => dispatch(reduceQtyAPI(payload)),
  addToCart: (payload) => dispatch(addToCartAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Cart);
