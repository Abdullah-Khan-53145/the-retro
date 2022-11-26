// imports
import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setProductAPI, addToCartAPI } from "../actions";
import "../Styles/product.css";
//component
function Product({
  allShoes,
  product,
  addToCart,
  setProduct,
  cartItems,
  user,
}) {
  // States
  const [position, setPosition] = useState({ position: "fixed", top: 0 });
  const [imgIndex, setImgIndex] = useState(0);
  const [relatedProductIndex, setRelatedProductIndex] = useState(0);
  const [imgColorIndex, setImgColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [ratings, setRatings] = useState({
    five: "0%",
    four: "0%",
    three: "0%",
    two: "0%",
    one: "0%",
  });

  // Click Handlers
  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      img: product.coverImg,
      price: product.price,
      id: `${product.name}-${sizeIndex}-${imgColorIndex}`,
      hotDeal: product.hotDeal,
      index: cartItems.length,
      size: product.size[sizeIndex],
      color: product.colors[imgColorIndex],
    });
  };
  const handleRightArrowClick = (e) => {
    console.log("done");
    if (imgIndex < 2) {
      setImgIndex(imgIndex + 1);
    } else {
      e.target.disable = true;
    }
  };
  const handleLeftArrowClick = (e) => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      e.target.disable = true;
    }
  };
  const handleClick = (shoe) => {
    setProduct(shoe);
  };

  //functions
  const scrollAnimator = () => {
    if (window.innerWidth >= 756) {
      if (ratings != product.rating) {
        if (
          window.scrollY >
          document.getElementById("1_stars").offsetTop -
            window.innerHeight +
            document.getElementById("1_stars").offsetHeight
        ) {
          setRatings({
            five: product.rating.five,
            four: product.rating.four,
            three: product.rating.three,
            two: product.rating.two,
            one: product.rating.one,
          });
        }
      }

      if (
        window.scrollY >=
        document.querySelector(".product_main_child_images_section_parent")
          .offsetTop
      ) {
        setPosition({ position: "fixed", top: 0 });
      } else if (
        window.scrollY <
        document.querySelector(".product_main_child_images_section_parent")
          .offsetTop
      ) {
        setPosition({ position: "fixed", top: 0 });
      }
      if (
        window.scrollY >=
        document.querySelector(".footer__main").offsetTop - window.innerHeight
      ) {
        setPosition({ position: "absolute", width: "100%", bottom: 0 });
      }
    } else {
      console.log("run");
      setPosition({ position: "static", top: "0" });
      setRatings(product.rating);
    }
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    setRelatedProductIndex(getRandomInt(0, 5));
    window.scrollTo(0, 0);
    if (window.innerWidth >= 756) {
      window.addEventListener("scroll", scrollAnimator);
      return () => window.removeEventListener("scroll", scrollAnimator);
    } else {
      console.log("run");
      setPosition({ position: "static", top: "0" });
      setRatings(product.rating);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main_product">
      {product ? (
        <div className="product_main_child">
          <div className="product_main_child_images_section_parent">
            <div
              className="product_main_child_images_section_child"
              style={position}
            >
              <div className="product_main_child_images_section_child_image">
                <div className="product_main_child_images_section_slider">
                  <button
                    className="left_arrow arrow"
                    onClick={handleLeftArrowClick}
                  >
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
                  </button>
                  <div className="main_product_image">
                    <img src={product.imgs[imgColorIndex][imgIndex]} alt="" />
                  </div>
                  <button
                    className="right_arrow arrow"
                    onClick={handleRightArrowClick}
                  >
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
                  </button>
                </div>
                <div className="product_main_child_images_section_samples">
                  <div
                    className="shoe_sample_image"
                    style={{
                      border: imgIndex === 0 ? "3px solid red" : "none",
                    }}
                    onClick={() => {
                      setImgIndex(0);
                    }}
                  >
                    <img src={product.imgs[imgColorIndex][0]} alt="" />
                  </div>
                  <div
                    className="shoe_sample_image"
                    style={{
                      border: imgIndex === 1 ? "3px solid red" : "none",
                    }}
                    onClick={() => {
                      setImgIndex(1);
                    }}
                  >
                    <img src={product.imgs[imgColorIndex][1]} alt="" />
                  </div>
                  <div
                    className="shoe_sample_image"
                    style={{
                      border: imgIndex === 2 ? "3px solid red" : "none",
                    }}
                    onClick={() => {
                      setImgIndex(2);
                    }}
                  >
                    <img src={product.imgs[imgColorIndex][2]} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_main_child_Info_section">
            <div className="product_main_heading_and_info">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className="product_average_rating">
              <h3>Average Rating</h3>
              <p>⭐⭐⭐⭐⭐ {product.averageRating}</p>
            </div>
            <div className="product_average_price">
              <h3>Price</h3>
              <h3
                style={{
                  color: product.hotDeal.status && user ? "gray" : "white",
                  textDecoration:
                    product.hotDeal.status && user ? "line-through" : "none",
                  fontSize:
                    product.hotDeal.status && user ? "1.5rem" : "2.5rem",
                }}
              >
                ${product.price.toFixed(2)}
              </h3>
              <h3>
                {product.hotDeal.status && user
                  ? `$${(
                      product.price -
                      product.price * product.hotDeal.discount
                    ).toFixed(2)}`
                  : ""}
              </h3>
            </div>
            <div className="product_sizes">
              <h3>Select Size</h3>
              <div className="product_size">
                {product.size.map((size, index) => (
                  <div
                    onClick={() => setSizeIndex(index)}
                    key={index}
                    style={{
                      border: sizeIndex === index ? "2px solid red" : "none",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="product_colors">
              <h3>Select colors</h3>
              <div className="product_color">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setImgColorIndex(index);
                    }}
                    style={{
                      background: color,
                      padding: "2px",

                      border:
                        index === imgColorIndex ? "2px solid white" : "none",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <button className="primary-button" onClick={handleAddToCart}>
              Add To Cart
            </button>
            <div className="realted_products">
              <h3>Related product</h3>
              <div className="related_products_parent">
                {allShoes.map((shoe, index) => {
                  if (
                    index > relatedProductIndex &&
                    index <= relatedProductIndex + 3
                  ) {
                    return (
                      <div className="related_product" key={index}>
                        <h4>
                          {shoe.name.length > 40
                            ? shoe.name.slice(0, 40) + " ..."
                            : shoe.name}
                        </h4>
                        <div className="product_details">
                          <div className="related_product_img">
                            <img src={shoe.coverImg} alt="" />
                          </div>
                          <div className="product_info">
                            <div className="product_description">
                              <p>
                                {shoe.description.length > 60
                                  ? shoe.description.slice(0, 60) + " ..."
                                  : shoe.description}
                              </p>
                            </div>
                            <div className="rating">
                              ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                            </div>
                            <div className="price">
                              <h5>${shoe.price}</h5>
                            </div>
                            <Link
                              to="/product"
                              onClick={() => handleClick(shoe)}
                            >
                              <button className="primary-button">
                                Buy Product
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

                {/* <div className="related_product">
                <h4>{product.name}</h4>
                <div className="product_details">
                  <div className="related_product_img">
                    <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
                  </div>
                  <div className="product_info">
                    <div className="product_description">
                      <p>
                        {product.description.length > 60
                          ? product.description.slice(0, 60) + " ..."
                          : product.description}
                      </p>
                    </div>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{product.averageRating}</span>
                    </div>
                    <div className="price">
                      <h5>{product.price}</h5>
                    </div>
                    <button className="primary-button">Buy Product</button>
                  </div>
                </div>
              </div>
              <div className="related_product">
                <h4>{product.name}</h4>
                <div className="product_details">
                  <div className="related_product_img">
                    <img src="./imgs/front-page-shoes/shoe_1.png" alt="" />
                  </div>
                  <div className="product_info">
                    <div className="product_description">
                      <p>
                        {product.description.length > 60
                          ? product.description.slice(0, 60) + " ..."
                          : product.description}
                      </p>
                    </div>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{product.averageRating}</span>
                    </div>
                    <div className="price">
                      <h5>{product.price}</h5>
                    </div>
                    <button className="primary-button">Buy Product</button>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
            <div className="product_rating">
              <h3>Costomer Reviews</h3>
              <span className="product_ratings">
                ⭐⭐⭐⭐⭐ {product.averageRating}
              </span>
              <div className="costomer_ratings">
                <div className="stars 5_stars" id="5_stars">
                  <span>5 stars</span>
                  <div className="stars_bar">
                    <div
                      className="load_bar"
                      style={{ width: ratings.five }}
                    ></div>
                  </div>
                </div>
                <div className="stars 4_stars" id="4_stars">
                  <span>4 stars</span>
                  <div className="stars_bar">
                    <div
                      className="load_bar"
                      style={{ width: ratings.four }}
                    ></div>
                  </div>
                </div>
                <div className="stars 3_stars" id="3_stars">
                  <span>3 stars</span>
                  <div className="stars_bar">
                    <div
                      className="load_bar"
                      style={{ width: ratings.three }}
                    ></div>
                  </div>
                </div>
                <div className="stars 2_stars" id="2_stars">
                  <span>2 stars</span>
                  <div className="stars_bar">
                    <div
                      className="load_bar"
                      style={{ width: ratings.two }}
                    ></div>
                  </div>
                </div>
                <div className="stars 1_stars" id="1_stars">
                  <span>1 stars</span>
                  <div className="stars_bar">
                    <div
                      className="load_bar"
                      style={{ width: ratings.one }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="primary-button">Write a Review</button>
            {product.reviews.length !== 0 &&
              product.reviews.map((review, index) => (
                <div className="costomer_reviews" key={index}>
                  <div className="review">
                    <h3>{review.name}</h3>
                    <div className="rating">
                      ⭐⭐⭐⭐⭐<span>{review.rate}</span>
                    </div>
                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <h1 style={{ width: "100%", textAlign: "center", minHeight: "50vh" }}>
          Error 404 Page not found
        </h1>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.ProductState,
  allShoes: state.ShoesState,
  cartItems: state.CartState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
  addToCart: (payload) => dispatch(addToCartAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Product);
