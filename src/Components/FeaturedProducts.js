import React from "react";
import { useEffect, useState } from "react";
import "../Styles/featuredproducts.css";

function FeaturedProducts({ shoes }) {
  const [position, setPosition] = useState({});
  useEffect(() => {
    console.log(shoes);
    window.addEventListener("scroll", () => {
      if (window.innerWidth <= 756) {
        if (
          window.scrollY >=
          document.querySelector(".featured__products__main__products")
            .offsetTop
        ) {
          setPosition({ position: "fixed", top: 0 });
        } else if (
          window.scrollY <
          document.querySelector(".featured__products__main__products")
            .offsetTop
        ) {
          setPosition({ position: "absolute", top: 0 });
        }
        if (
          window.scrollY >=
          document.querySelector(".featured__products__main__products")
            .offsetTop +
            document.querySelector(".featured__products__main__products")
              .offsetHeight -
            window.innerHeight
        ) {
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
            <img src="./imgs/featured_products_heading.png" alt="" />
          </div>
        </div>
        <div className="featured__products__main__products">
          <div className="featured__products__card__row">
            {shoes.length !== 0 ? (
              shoes.map((shoe, index) => {
                if (index < 2) {
                  return (
                    <div className="featured__products__card">
                      <div className="featured__products__card__info">
                        <div className="featured__products__card__info__img">
                          <img src={shoe.img} alt="" />
                        </div>
                        <div className="featured__products__card__info__text">
                          <div className="featured__products__card__heading">
                            {shoe.name.length > 35
                              ? shoe.name.slice(0, 35) + " ..."
                              : shoe.name}
                          </div>
                          <p>
                            {shoe.description.length > 150
                              ? shoe.description.slice(0, 150) + " ..."
                              : shoe.description}
                          </p>
                          <div className="rating">
                            ⭐⭐⭐⭐⭐<span>{shoe.rating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <button className="primary-button">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <>
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
                      <div className="rating">
                        ⭐⭐⭐⭐⭐<span>5.5</span>
                      </div>
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
                      <div className="rating">
                        ⭐⭐⭐⭐⭐<span>5.5</span>
                      </div>
                      <span>1999$</span>
                      <button className="primary-button">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="featured__products__card__row">
            {shoes.length !== 0 ? (
              shoes.map((shoe, index) => {
                if (index > 1 && index < 4) {
                  return (
                    <div className="featured__products__card">
                      <div className="featured__products__card__info">
                        <div className="featured__products__card__info__img">
                          <img src={shoe.img} alt="" />
                        </div>
                        <div className="featured__products__card__info__text">
                          <div className="featured__products__card__heading">
                            {shoe.name.length > 35
                              ? shoe.name.slice(0, 35) + " ..."
                              : shoe.name}
                          </div>
                          <p>
                            {shoe.description.length > 150
                              ? shoe.description.slice(0, 150) + " ..."
                              : shoe.description}
                          </p>
                          <div className="rating">
                            ⭐⭐⭐⭐⭐<span>{shoe.rating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <button className="primary-button">BUY NOW</button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <>
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
                      <div className="rating">
                        ⭐⭐⭐⭐⭐<span>5.5</span>
                      </div>
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
                      <div className="rating">
                        ⭐⭐⭐⭐⭐<span>5.5</span>
                      </div>
                      <span>1999$</span>
                      <button className="primary-button">BUY NOW</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
