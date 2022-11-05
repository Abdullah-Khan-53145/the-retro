import React from "react";
import "../Styles/hotdeals.css";
function HotDeals({ shoes }) {
  return (
    <div>
      <div className="hot_deals__products__main">
        <div className="hot_deals__products__child">
          <div className="hot_deals__productsmain__heading">
            <div className="hot_deals__productsmain__heading__child">
              <img src="./imgs/hot_deal_heading.png" alt="" />
            </div>
          </div>
          <div className="hot_deals__products__main__products">
            <div className="hot_deals__lock__parent">
              <div className="hot__deals__lock__message">
                <h2 className="hot__deals__lock__message__heading">
                  Only For Members
                </h2>
                <button className="primary-button">SIGN IN</button>
              </div>
            </div>
            <div className="hot_deals__products__card__row">
              {shoes.length !== 0 ? (
                shoes.map((shoe, index) => {
                  if (index < 2) {
                    return (
                      <div className="hot_deals__products__card">
                        <div className="hot_deals__products__card__info">
                          <div className="hot_deals__products__card__info__img">
                            <img src={shoe.img} alt="" />
                          </div>
                          <div className="hot_deals__products__card__info__text">
                            <div className="hot_deals__products__card__heading">
                              {shoe.name.length > 20
                                ? shoe.name.slice(0, 20) + " ..."
                                : shoe.name}
                            </div>
                            <p>
                              {shoe.description.length > 100
                                ? shoe.description.slice(0, 100) + " ..."
                                : shoe.description}
                            </p>
                            <div className="rating">
                              ⭐⭐⭐⭐⭐<span>{shoe.rating}</span>
                            </div>

                            <div className="hot__deals__price">
                              <span>
                                ${(shoe.price - shoe.price * 0.3).toFixed(2)}
                              </span>{" "}
                              <span>${shoe.price}</span>
                            </div>

                            <button className="primary-button">BUY NOW</button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <>
                  <div className="hot_deals__products__card">
                    <div className="hot_deals__products__card__info">
                      <div className="hot_deals__products__card__info__img">
                        <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                      </div>
                      <div className="hot_deals__products__card__info__text">
                        <div className="hot_deals__products__card__heading">
                          Addidas xyz
                        </div>
                        <p>
                          This will be the short decription of our shoes ...
                        </p>
                        <div className="rating">
                          ⭐⭐⭐⭐⭐<span>5.5</span>
                        </div>
                        <span>1999$</span>
                        <button className="primary-button">BUY NOW</button>
                      </div>
                    </div>
                  </div>
                  <div className="hot_deals__products__card">
                    <div className="hot_deals__products__card__info">
                      <div className="hot_deals__products__card__info__img">
                        <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                      </div>
                      <div className="hot_deals__products__card__info__text">
                        <div className="hot_deals__products__card__heading">
                          Addidas xyz
                        </div>
                        <p>
                          This will be the short decription of our shoes ...
                        </p>
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
            <div className="hot_deals__products__card__row">
              {shoes.length !== 0 ? (
                shoes.map((shoe, index) => {
                  if (index > 2 && index < 5) {
                    return (
                      <div className="hot_deals__products__card">
                        <div className="hot_deals__products__card__info">
                          <div className="hot_deals__products__card__info__img">
                            <img src={shoe.img} alt="" />
                          </div>
                          <div className="hot_deals__products__card__info__text">
                            <div className="hot_deals__products__card__heading">
                              {shoe.name.length > 20
                                ? shoe.name.slice(0, 20) + " ..."
                                : shoe.name}
                            </div>
                            <p>
                              {shoe.description.length > 100
                                ? shoe.description.slice(0, 100) + " ..."
                                : shoe.description}
                            </p>
                            <div className="rating">
                              ⭐⭐⭐⭐⭐<span>{shoe.rating}</span>
                            </div>
                            <div className="hot__deals__price">
                              <span>
                                ${(shoe.price - shoe.price * 0.3).toFixed(2)}
                              </span>{" "}
                              <span>${shoe.price}</span>
                            </div>
                            <button className="primary-button">BUY NOW</button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <>
                  <div className="hot_deals__products__card">
                    <div className="hot_deals__products__card__info">
                      <div className="hot_deals__products__card__info__img">
                        <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                      </div>
                      <div className="hot_deals__products__card__info__text">
                        <div className="hot_deals__products__card__heading">
                          Addidas xyz
                        </div>
                        <p>
                          This will be the short decription of our shoes ...
                        </p>
                        <div className="rating">
                          ⭐⭐⭐⭐⭐<span>5.5</span>
                        </div>
                        <span>1999$</span>
                        <button className="primary-button">BUY NOW</button>
                      </div>
                    </div>
                  </div>
                  <div className="hot_deals__products__card">
                    <div className="hot_deals__products__card__info">
                      <div className="hot_deals__products__card__info__img">
                        <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                      </div>
                      <div className="hot_deals__products__card__info__text">
                        <div className="hot_deals__products__card__heading">
                          Addidas xyz
                        </div>
                        <p>
                          This will be the short decription of our shoes ...
                        </p>
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
    </div>
  );
}

export default HotDeals;
