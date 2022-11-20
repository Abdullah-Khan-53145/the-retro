import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "../Styles/product.css";
function Product(props) {
  const dummy_shoe = props.product;
  //{five:76,four: 14,three: 5,two: 2,one: 3}

  const [ratings, setRatings] = useState({
    five: "0%",
    four: "0%",
    three: "0%",
    two: "0%",
    one: "0%",
  });
  const [position, setPosition] = useState({ position: "fixed", top: 0 });
  const [imgIndex, setImgIndex] = useState(0);
  const [imgColorIndex, setImgColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  //Slider functions
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

  //scroll Animations
  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 756) {
      if (
        ratings !=
        {
          five: "76%",
          four: "14%",
          three: "5%",
          two: "2%",
          one: "3%",
        }
      ) {
        if (
          window.scrollY >
          document.getElementById("5_stars").offsetTop -
            window.innerHeight +
            document.getElementById("5_stars").offsetHeight
        ) {
          setRatings({ ...ratings, five: "76%" });
        }
        if (
          window.scrollY >
          document.getElementById("4_stars").offsetTop -
            window.innerHeight +
            document.getElementById("4_stars").offsetHeight
        ) {
          setRatings({ ...ratings, four: "14%" });
        }
        if (
          window.scrollY >
          document.getElementById("3_stars").offsetTop -
            window.innerHeight +
            document.getElementById("3_stars").offsetHeight
        ) {
          setRatings({ ...ratings, three: "5%" });
        }
        if (
          window.scrollY >
          document.getElementById("2_stars").offsetTop -
            window.innerHeight +
            document.getElementById("2_stars").offsetHeight
        ) {
          setRatings({ ...ratings, two: "2%" });
        }
        if (
          window.scrollY >
          document.getElementById("1_stars").offsetTop -
            window.innerHeight +
            document.getElementById("1_stars").offsetHeight
        ) {
          setRatings({ ...ratings, one: "3%" });
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
      setPosition({ position: "static", top: "0" });
      setRatings({
        five: "76%",
        four: "14%",
        three: "5%",
        two: "2%",
        one: "3%",
      });
    }
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main_product">
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
                  <img src={dummy_shoe.imgs[imgColorIndex][imgIndex]} alt="" />
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
                  <img src={dummy_shoe.imgs[imgColorIndex][0]} alt="" />
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
                  <img src={dummy_shoe.imgs[imgColorIndex][1]} alt="" />
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
                  <img src={dummy_shoe.imgs[imgColorIndex][2]} alt="" />
                </div>
              </div>
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
            <p>⭐⭐⭐⭐⭐ {dummy_shoe.averageRating}</p>
          </div>
          <div className="product_sizes">
            <h3>Select Size</h3>
            <div className="product_size">
              {dummy_shoe.size.map((size, index) => (
                <div
                  onClick={() => setSizeIndex(index)}
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
              {dummy_shoe.colors.map((color, index) => (
                <div
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
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.averageRating}</span>
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
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.averageRating}</span>
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
                      ⭐⭐⭐⭐⭐<span>{dummy_shoe.averageRating}</span>
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
          <div className="product_rating">
            <h3>Costomer Reviews</h3>
            <span className="product_ratings">
              ⭐⭐⭐⭐⭐ {dummy_shoe.averageRating}
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
          {dummy_shoe.reviews.length !== 0 &&
            dummy_shoe.reviews.map((review) => (
              <div className="costomer_reviews">
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
    </div>
  );
}
const mapStateToProps = (state) => ({
  product: state.ProductState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(Product);
