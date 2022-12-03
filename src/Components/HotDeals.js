import React from "react";
import "../Styles/hotdeals.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setProductAPI, logOutAPI, logInAPI } from "../actions";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
function HotDeals({ allShoes, setProduct, logIn, user }) {
  const [shoes, setShoes] = useState([]);
  const [img, setImg] = useState(
    window.innerWidth >= 801
      ? `./imgs/hot_deal_heading.png`
      : `./imgs/hot_deal_heading_mob.png`
  );

  // funtions
  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        logIn(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error" + errorCode + "\n" + errorMessage);
      });
  };

  // handlers
  const handleClick = (shoe) => {
    setProduct(shoe);
  };
  const handleLogIn = () => {
    signIn();
  };

  useEffect(() => {
    let arr = [];
    allShoes.forEach((shoe) => {
      if (shoe.hotDeal.status) arr.push(shoe);
    });
    setShoes(arr);
    window.addEventListener("resize", () => {
      setImg(
        window.innerWidth >= 801
          ? `./imgs/hot_deal_heading.png`
          : `./imgs/hot_deal_heading_mob.png`
      );
    });
    return () =>
      window.removeEventListener("resize", () => {
        setImg(
          window.innerWidth >= 801
            ? `./imgs/hot_deal_heading.png`
            : `./imgs/hot_deal_heading_mob.png`
        );
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="hot_deals__products__main">
        <div className="hot_deals__products__child">
          <div className="hot_deals__productsmain__heading">
            <div className="hot_deals__productsmain__heading__child">
              <img loading="lazy" src={img} alt="" />
            </div>
          </div>
          <div className="hot_deals__products__main__products">
            <div
              className="hot_deals__lock__parent"
              style={{ display: user ? "none" : "flex" }}
            >
              <div className="hot__deals__lock__message">
                <h2 className="hot__deals__lock__message__heading">
                  Only For Members
                </h2>
                <button className="primary-button" onClick={handleLogIn}>
                  SIGN IN
                </button>
              </div>
            </div>
            {shoes.length !== 0 &&
              shoes.map((shoe, index) => (
                <div className="hot_deals__products__card" key={index}>
                  <div className="hot_deals__products__card__info">
                    <div className="hot_deals__products__card__info__img">
                      <img loading="lazy" src={shoe.coverImg} alt="" />
                    </div>
                    <div className="hot_deals__products__card__info__text">
                      <div className="hot_deals__products__card__heading">
                        {/* {shoe.name.length > 20
                          ? shoe.name.slice(0, 20) + " ..."
                          : shoe.name} */}
                        {shoe.name}
                      </div>
                      <p>
                        {shoe.description.length > 120
                          ? shoe.description.slice(0, 120) + " ..."
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
                              shoe.price - shoe.price * shoe.hotDeal.discount,
                          })
                        }
                        to="/product"
                      >
                        <button className="primary-button">BUY NOW</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allShoes: state.ShoesState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
  logIn: (payload) => dispatch(logInAPI(payload)),
  logOut: () => dispatch(logOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(HotDeals);
