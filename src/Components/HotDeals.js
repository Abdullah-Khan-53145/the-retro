import React from "react";
import "../Styles/hotdeals.css";
import { setProductAPI } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function HotDeals({ allShoes, setProduct }) {
  const [shoes, setShoes] = useState([]);

  const handleClick = (shoe) => {
    setProduct(shoe);
  };
  useEffect(() => {
    let arr = [];
    allShoes.forEach((shoe) => {
      if (shoe.hotDeal.status) arr.push(shoe);
    });
    setShoes(arr);
  }, []);

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
              {shoes.length !== 0 &&
                shoes.map((shoe, index) => {
                  if (index < 2) {
                    return (
                      <div className="hot_deals__products__card">
                        <div className="hot_deals__products__card__info">
                          <div className="hot_deals__products__card__info__img">
                            <img src={shoe.coverImg} alt="" />
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
                              ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                            </div>

                            <div className="hot__deals__price">
                              <span>
                                $
                                {(
                                  shoe.price -
                                  shoe.price * shoe.hotDeal.discount
                                ).toFixed(2)}
                              </span>
                              <span>${shoe.price}</span>
                            </div>
                            <Link
                              onClick={() =>
                                handleClick({
                                  ...shoe,
                                  price:
                                    shoe.price -
                                    shoe.price * shoe.hotDeal.discount,
                                })
                              }
                              to="/product"
                            >
                              <button className="primary-button">
                                BUY NOW
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="hot_deals__products__card__row">
              {shoes.length !== 0 &&
                shoes.map((shoe, index) => {
                  if (index > 1) {
                    return (
                      <div className="hot_deals__products__card">
                        <div className="hot_deals__products__card__info">
                          <div className="hot_deals__products__card__info__img">
                            <img src={shoe.coverImg} alt="" />
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
                              ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                            </div>
                            <div className="hot__deals__price">
                              <span>
                                $
                                {(
                                  shoe.price -
                                  shoe.price * shoe.hotDeal.discount
                                ).toFixed(2)}
                              </span>{" "}
                              <span>${shoe.price}</span>
                            </div>
                            <Link
                              onClick={() =>
                                handleClick({
                                  ...shoe,
                                  price:
                                    shoe.price -
                                    shoe.price * shoe.hotDeal.discount,
                                })
                              }
                              to="/product"
                            >
                              <button className="primary-button">
                                BUY NOW
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allShoes: state.ShoesState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(HotDeals);
