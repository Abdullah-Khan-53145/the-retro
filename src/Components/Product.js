import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/product.css";
function Product() {
  const dummy_shoe = {
    name: "Under Armour Men's Charged Assert 9 Running Shoe",
    imgs: [
      [
        "imgs/product-page-shoes/shoe_1/shoe_1_red_A.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_red_B.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_red_C.png",
      ],
      [
        "imgs/product-page-shoes/shoe_1/shoe_1_black_A.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_black_B.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_black_C.png",
      ],
      [
        "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_A.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_B.png",
        "imgs/product-page-shoes/shoe_1/shoe_1_navy_blue_C.png",
      ],
    ],
    colors: ["red", "black", "navy"],
    description:
      "These running shoes are built to help anyone go faster-Charged Cushioning® helps protect against impact, leather overlays add durable stability, and a mesh upper keeps your feet cool for miles.. Lightweight mesh upper with 3-color digital print delivers complete breathability. Durable leather overlays for stability & that locks in your midfoot. EVA sockliner provides soft, step-in comfort. Charged Cushioning® midsole uses compression molded foam for ultimate responsiveness & durability. Solid rubber outsole covers high impact zones for greater durability with less weight. Offset: 10mm. NEUTRAL: For runners who need a balance of flexibility & cushioning. Lace type: Standard tie.",
    rating: "4.6",
    price: "56.25",
    size: [1, 2, 3, 4, 5, 6, 7, 8],

    reviews: [
      {
        name: "Tezza",
        review:
          "These are highly rated so I thought Id buy them for jogging. Because of foot problems, I usually have to substitute the footbed in the shoe for an orthotic.I tried these on and they look pretty good and feel pretty good. The sole on them is a little harder and more supportive than other shoes, which I like. Unfortunately, I would still need to use an orthotic to jog in these, as the footbed is somewhat flat and not overly arch-supportive. That's not to say they are a bad shoe, quite the opposite, they are really good.So, currently I'm using them as my biking shoe (mountain, road) and they work great for that. Probably a pretty good walking shoe. Not so sure about using them as a true running shoe, depends on your needs for support.",
        rate: "5",
      },
      {
        name: "Allison Boland",
        review:
          "Love these shoes! I bought my husband a pair of these shoes and he loves them and couldn't stop talking about how great they were. Well, I happen to be running to my car and just slipped on his shoes and I have to say, OMG! They felt awesome even though they weren't my size. So, I have to agree with my husband and even tell him he was right for once, lol. So, I bought myself a pair, they fit perfectly, feel great, high quality.",
        rate: "5",
      },
      {
        name: "Jim Leahey",
        review:
          "These shoes are very comfortable, but most importantly they are sturdily built. Typically I start wearing a sneaker out within the first month of use, however, in the weeks that I've owned this and after walking several dozen miles in them there's almost no signs of wear or tear. If you are on a budget, buy these.I wouldn't work out in them as they are high soled and you could get a nasty sprain running in these (also kind of heavy).",
        rate: "5",
      },
      {
        name: "Big Fan",
        review:
          "I find UA clothing rediculously expensive but the shoes are priced right. I have moved to all UA shoes. inexpensive , durible and they look great. I wear them to work, I have 2 different pairs for working out and one for kicking around in.",
        rate: "5",
      },
      {
        name: "	CDM",
        review:
          "Very comfortable and supportive, might run a little small. I ordered without trying them on first, I usually wear 10.5 but occasionally in some brands I go with 11. If I get these again, I'll probably go for 11. My Brooks fit perfect in 10.5, but these seem a little on the snug side.",
        rate: "4",
      },
      {
        name: "Katrina Perry",
        review:
          "I got these for a nice looking pair of shoes on the weekends. I have size 14 4E feet. They are comfortable enough to wear around for a day. Over all I am happy with them. I will say though, my feet are wide and it is hard to find a 4E that is still wide enough and actually fits. I'm a Dunham, Brooks, Hoka 4E person. These brands, my little toe does not rub the outside. Asics, Saucony, New Balance, all of those 4E my little toe is still squished against the side. That is the case with these as well. So, if those brands fit you, these will be just fine. If those brands are slightly snug on you, these will be too. The length is spot on. The only other ding i'd give it is as soft and flexible as the sides are, really nice, the big logo on the side is fairly rigid and you can feel it on the side of your foot. Not rubbing to the point of blisters or anything, but you definitely know there's a big logo on the side of your shoe.",
        rate: "4",
      },
      {
        name: "	Jason schilling",
        review:
          "I've bought this style a few times now. I do alot of walking for work and they have definitely held up! Have had lower back issues but haven't had many issues since I've been wearing these!",
        rate: "5",
      },
      {
        name: "Objective reviewer",
        review:
          "I am training for an Ironman, I use this shoes for easy runs and recovery training and they are very comfortable and stable. Wouldn't do anything longer than 15k on them, will never brake a personal record on them, but they cost at least half the price of all my other running shoes, which make this pair a pretty good option for daily trainers. Helps you balance out the wear of your other, more expensive, running shoes.",
        rate: "5",
      },
    ],
  };
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
      setPosition({ position: "static" });
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
    if (window.innerWidth < 756) {
      setPosition({ position: "static" });
    }
  }, [window.innerWidth]);
  return (
    <div className="main_product">
      <div className="product_main_child">
        <div className="product_main_child_images_section_parent">
          <div className="dummy_div"></div>
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
            <p>⭐⭐⭐⭐⭐ {dummy_shoe.rating}</p>
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
          <div className="product_rating">
            <h3>Costomer Reviews</h3>
            <span className="product_ratings">
              ⭐⭐⭐⭐⭐ {dummy_shoe.rating}
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

export default Product;
