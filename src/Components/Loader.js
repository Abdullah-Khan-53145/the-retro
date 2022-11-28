import React from "react";
import "../Styles/loader.css";
function Loader() {
  return (
    <div className="loader__main">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
