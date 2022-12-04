import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProductAPI } from "../actions";
import { Link } from "react-router-dom";
import "../Styles/featuredproducts.css";

function FeaturedProducts(props) {
  const { allShoes, setProduct } = props;
  const [img, setImg] = useState(
    window.innerWidth >= 600
      ? `./imgs/featured_products_heading.png`
      : `./imgs/featured_products_heading_mob.png`
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setImg(
        window.innerWidth >= 600
          ? `./imgs/featured_products_heading.png`
          : `./imgs/featured_products_heading_mob.png`
      );
    });
    return () =>
      window.removeEventListener("resize", () => {
        setImg(
          window.innerWidth >= 600
            ? `./imgs/featured_products_heading.png`
            : `./imgs/featured_products_heading_mob.png`
        );
      });
    // eslint-disable-next-line
  }, []);
  const handleClick = (shoe) => {
    setProduct(shoe);
  };

  return (
    <div className="featured__products__main">
      <div className="featured__products__child">
        <div className="featured__productsmain__heading">
          <div className="featured__productsmain__heading__child">
            <img loading="lazy" src={img} alt="" />
          </div>
        </div>
        <div className="featured__products__main__products">
          <div className="featured__products__card__row">
            {allShoes.length !== 0 &&
              allShoes.map((shoe, index) => {
                if (shoe.featured) {
                  return (
                    <div className="featured__products__card" key={index}>
                      <div className="featured__products__card__info">
                        <div className="featured__products__card__info__img">
                          <img loading="lazy" src={shoe.coverImg} alt="" />
                        </div>
                        <div className="featured__products__card__info__text">
                          <h2 className="featured__products__card__heading">
                            {shoe.name.length > 55
                              ? shoe.name.slice(0, 55) + " ..."
                              : shoe.name}
                          </h2>
                          {window.innerWidth <= 756 ? (
                            <p>
                              {shoe.description.length > 220
                                ? shoe.description.slice(0, 220) + " ..."
                                : shoe.description}
                            </p>
                          ) : (
                            <p>
                              {shoe.description.length > 150
                                ? shoe.description.slice(0, 150) + " ..."
                                : shoe.description}
                            </p>
                          )}

                          <div className="rating">
                            ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <div className="buy__now__button">
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
