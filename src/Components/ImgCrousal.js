import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { connect } from "react-redux";
import { toggleImgAPI } from "../actions";
import "../Styles/imgcom.css";

function ImgCrousal({ imgs, Imgind, imgState, setImg }) {
  // states
  const refOne = useRef(null);
  const [index, setIndex] = useState(Imgind);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // handlers
  const handleClick = () => {
    setImg(false);
  };
  const OutSideCLick = (e) => {
    if (!refOne.current.contains(e.target)) {
      setImg(false);
    }
  };
  // useEffects
  useEffect(() => {
    setIndex(Imgind);
  }, [Imgind]);

  return (
    <>
      <div className="close"></div>
      <div
        className="crousal__main"
        onClick={OutSideCLick}
        style={{ display: imgState ? "flex" : "none" }}
      >
        <div className="crousal_child" ref={refOne}>
          <div className="crousal_toggler" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="svg__here"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="crousal"
            interval={null}
          >
            <Carousel.Item className="croual__item">
              <img
                className="d-block w-100 crousal__img"
                src={imgs[0]}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 crousal__img"
                src={imgs[1]}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 crousal__img"
                src={imgs[2]}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  imgState: state.ImgState,
});
const dispatchStateToProps = (dispatch) => ({
  setImg: (payload) => dispatch(toggleImgAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(ImgCrousal);
