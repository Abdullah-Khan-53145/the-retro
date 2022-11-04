import React from "react";
import "../Styles/bannar.css";
function Bannar() {
  return (
    <div className="main__bannar">
      <div className="main__child">
        <div className="img__main__bannar">
          <img src="./imgs/bannar-picture.png" alt="" />
        </div>
        <div className="sub__main__bannar">
          <h2>Subscribe to our news letter to stay updated</h2>
          <div className="cre__bannar">
            <input type="text" placeholder="Email" />
            <button className="primary-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannar;
