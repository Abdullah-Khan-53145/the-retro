import React from "react";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import "../Styles/header.css";
function Header() {
  return (
    <div className="header__main">
      <div className="header_child_main">
        <div className="header__main__logo">
          <img src="imgs/top_nav_logo.png" alt="" />
        </div>
        <div className="header__nav__buttons">
          <div className="header__main__buttons">
            <button>Sign in</button>
            <button>Register</button>
            <button>
              <ShoppingBasketSharpIcon fontSize="large" />
            </button>
          </div>
          <div className="header__hamburger__menu">
            <div class="menu-icon">
              <input class="menu-icon__cheeckbox" type="checkbox" />
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
