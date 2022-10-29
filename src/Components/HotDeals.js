import React from "react";
import "../Styles/hotdeals.css";
function HotDeals() {
  return (
    <div>
      <div className="hot_deals__products__main">
        <div className="hot_deals__products__child">
          <div className="hot_deals__productsmain__heading">
            <div className="hot_deals__productsmain__heading__child">
              <img src="./imgs/hot_deal_heading.PNG" alt="" />
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
              <div className="hot_deals__products__card">
                <div className="hot_deals__products__card__info">
                  <div className="hot_deals__products__card__info__img">
                    <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                  </div>
                  <div className="hot_deals__products__card__info__text">
                    <div className="hot_deals__products__card__heading">
                      Addidas xyz
                    </div>
                    <p>This will be the short decription of our shoes ...</p>
                    <div className="rating">⭐⭐⭐⭐⭐ </div>
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
                    <p>This will be the short decription of our shoes ...</p>
                    <div className="rating">⭐⭐⭐⭐⭐ </div>
                    <span>1999$</span>
                    <button className="primary-button">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals__products__card__row">
              <div className="hot_deals__products__card">
                <div className="hot_deals__products__card__info">
                  <div className="hot_deals__products__card__info__img">
                    <img src="./imgs/brand_sec_shoe_2.png" alt="" />
                  </div>
                  <div className="hot_deals__products__card__info__text">
                    <div className="hot_deals__products__card__heading">
                      Addidas xyz
                    </div>
                    <p>This will be the short decription of our shoes ...</p>
                    <div className="rating">⭐⭐⭐⭐⭐ </div>
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
    </div>
  );
}

export default HotDeals;
