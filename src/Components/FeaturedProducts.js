import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProductAPI } from "../actions";
import { Link } from "react-router-dom";
import "../Styles/featuredproducts.css";

function FeaturedProducts(props) {
  const { allShoes, setProduct } = props;
  const [position, setPosition] = useState({});

  const handleClick = (shoe) => {
    setProduct(shoe);
  };
  useEffect(() => {
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
    // eslint-disable-next-line
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
            {allShoes.length !== 0 &&
              allShoes.map((shoe, index) => {
                if (index < 2 && shoe.featured) {
                  return (
                    <div className="featured__products__card">
                      <div className="featured__products__card__info">
                        <div className="featured__products__card__info__img">
                          <img src={shoe.coverImg} alt="" />
                        </div>
                        <div className="featured__products__card__info__text">
                          <div className="featured__products__card__heading">
                            {shoe.name.length > 55
                              ? shoe.name.slice(0, 55) + " ..."
                              : shoe.name}
                          </div>
                          <p>
                            {shoe.description.length > 150
                              ? shoe.description.slice(0, 150) + " ..."
                              : shoe.description}
                          </p>
                          <div className="rating">
                            ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <Link
                            to="/product"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleClick(shoe)}
                            className="primary-button"
                          >
                            BUY NOW
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <div className="featured__products__card__row">
            {allShoes.length !== 0 &&
              allShoes.map((shoe, index) => {
                if (index > 1 && index < 4 && shoe.featured) {
                  return (
                    <div className="featured__products__card">
                      <div className="featured__products__card__info">
                        <div className="featured__products__card__info__img">
                          <img src={shoe.coverImg} alt="" />
                        </div>
                        <div className="featured__products__card__info__text">
                          <div className="featured__products__card__heading">
                            {shoe.name.length > 56
                              ? shoe.name.slice(0, 56) + " ..."
                              : shoe.name}
                          </div>
                          <p>
                            {shoe.description.length > 150
                              ? shoe.description.slice(0, 150) + " ..."
                              : shoe.description}
                          </p>
                          <div className="rating">
                            ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <Link
                            to="/product"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleClick(shoe)}
                            className="primary-button"
                          >
                            BUY NOW
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
  );
}

const mapStateToProps = (state) => ({
  allShoes: state.ShoesState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(FeaturedProducts);
