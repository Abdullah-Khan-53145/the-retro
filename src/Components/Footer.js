import React from "react";
import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer__main">
      <div className="footer__main__child">
        <div className="about__logo__section__footer">
          <div className="about__logo__section__footer__logo">
            <img src="./imgs/footer-retro-logo.png" alt="" />
          </div>
          <div className="about__logo__section__footer__text">
            <h2>About us</h2>
            <p>
              The Retro provides the best shoes for casual wear and sports. we
              provide the authentic brand shoes at a very cheap price
            </p>
          </div>
        </div>
        <div className="other__links__section__footer">
          <div className="Connect__section__footer links__section__footer">
            <h2>Connect</h2>
            <div className="Connect__section__footer__subs">
              <div className="Connect__section__footer__sub">
                <h3>Adress</h3>
                <p>
                  4949 Rainbow Drive, <br />
                  Canton, OH, 44702
                </p>
              </div>
              <div className="Connect__section__footer__sub">
                <h3>Email</h3>
                <p>retroshoe@gmail.com</p>
              </div>
              <div className="Connect__section__footer__sub">
                <h3>Phone</h3>
                <p>00-1-202-588-6500</p>
              </div>
            </div>
          </div>
          <div className="Helpful__links__section__footer links__section__footer">
            <h2>Helpful links</h2>
            <div className="Helpful__links__section__footer__sub">
              <p>Services</p>
              <p>Support</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="Services__section__footer links__section__footer">
            <h2>Services</h2>
            <div className="Services__section__footer__sub">
              <p>Brand List</p>
              <p>Order</p>
              <p>Return and Exchange</p>
              <p>Fashion List</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main__copyright">
        2022 © CyberMod IT | All rights reserved
      </div>
    </div>
  );
}

export default Footer;
