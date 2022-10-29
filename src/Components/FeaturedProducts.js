import React from "react";
import { useEffect, useState } from "react";
import "../Styles/featuredproducts.css";

function FeaturedProducts() {
  const [position, setPosition] = useState({});
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth <= 756) {
        if (window.scrollY >= 1625) {
          setPosition({ position: "fixed", top: 0 });
        } else if (window.scrollY < 1625) {
          setPosition({ position: "absolute", top: 0 });
        }
        if (window.scrollY >= 1816) {
          setPosition({ position: "absolute", bottom: 0 });
        }
      } else {
        setPosition({ position: "static" });
      }
    });
  }, []);
  return (
    <div className="featured__products__main">
      <div className="featured__products__child">
        <div className="featured__productsmain__heading">
          <div
            className="featured__productsmain__heading__child"
            style={position}
          >
            <img src="./imgs/featured_products_heading.PNG" alt="" />
          </div>
        </div>
        <div className="featured__products__main__products">
          <div className="featured__products__card__row">
            <div className="featured__products__card">
              <div className="featured__products__card__info">
                <div className="featured__products__card__info__img">
                  <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                </div>
                <div className="featured__products__card__info__text">
                  <div className="featured__products__card__heading">
                    Addidas xyz
                  </div>
                  <p>This will be the short decription of our shoes ...</p>
                  <div className="rating">⭐⭐⭐⭐⭐ </div>
                  <span>1999$</span>
                  <button className="primary-button">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="featured__products__card">
              <div className="featured__products__card__info">
                <div className="featured__products__card__info__img">
                  <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                </div>
                <div className="featured__products__card__info__text">
                  <div className="featured__products__card__heading">
                    Addidas xyz
                  </div>
                  <p>This will be the short decription of our shoes ...</p>
                  <div className="rating">⭐⭐⭐⭐⭐ </div>
                  <span>1999$</span>
                  <button className="primary-button">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
          <div className="featured__products__card__row">
            <div className="featured__products__card">
              <div className="featured__products__card__info">
                <div className="featured__products__card__info__img">
                  <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                </div>
                <div className="featured__products__card__info__text">
                  <div className="featured__products__card__heading">
                    Addidas xyz
                  </div>
                  <p>This will be the short decription of our shoes ...</p>
                  <div className="rating">⭐⭐⭐⭐⭐ </div>
                  <span>1999$</span>
                  <button className="primary-button">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="featured__products__card">
              <div className="featured__products__card__info">
                <div className="featured__products__card__info__img">
                  <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                </div>
                <div className="featured__products__card__info__text">
                  <div className="featured__products__card__heading">
                    Addidas xyz
                  </div>
                  <p>This will be the short decription of our shoes ...</p>
                  <div className="rating">⭐⭐⭐⭐⭐ </div>
                  <span>1999$</span>
                  <button className="primary-button">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
