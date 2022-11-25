import React from "react";
import "../Styles/checkout.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const countries = require("./countries.json");
const countries_code = require("./PhoneCode.json");
function Checkout({ user, allShoes, cartItems }) {
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState("");
  const [code, setCode] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [phone, setPhone] = useState("");
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const years = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
    2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047,
    2048, 2049, 2050,
  ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  useEffect(() => {
    console.log(cartItems);
    getTotalPrice();
  }, [cartItems, user]);

  // Funtions
  const getTotalPrice = () => {
    let calsubtotalPrice = 0;
    let caldiscount = 0;
    cartItems.forEach((item) => {
      calsubtotalPrice += item.price * item.qty;
    });
    setSubtotalPrice(calsubtotalPrice);
    if (user) {
      cartItems.forEach((item) => {
        if (item.hotDeal.status) {
          const price = item.price * item.hotDeal.discount;
          caldiscount += price * item.qty;
        }
      });
      setDiscount(caldiscount);
    } else {
      setDiscount(0);
    }
    setTotalPrice(subtotalPrice - discount + 20);
  };
  const FindTheCountryCode = (val) => {
    countries_code.forEach((code) => {
      if (code.name === val) {
        setCode(code.dial_code + " ");
        console.log(code.dial_code);
      }
    });
  };
  const isStateStillNumeric = (val) => {
    const n = val;
    const ar = n.toString().split("");
    return Number.isInteger(parseInt(ar[ar.length - 1]));
  };
  //   handlers
  const handlecountry = (e) => {
    if (e.target.value !== "") {
      setCountry(e.target.value);
      setStates(JSON.parse(e.target.value).states);
      FindTheCountryCode(JSON.parse(e.target.value).country_name);
      console.log(JSON.parse(e.target.value).country_name);
    }
  };
  const handlestate = (e) => {
    setState(e.target.value);
  };
  const handlephone = (e) => {
    if (isStateStillNumeric(e.target.value)) {
      setPhone(e.target.value);
    } else if (phone.length != 1) {
      setPhone(phone + "");
    } else {
      setPhone("");
    }
  };
  const handlecardnumber = (e) => {
    if (isStateStillNumeric(e.target.value)) {
      setCardnumber(e.target.value);
    } else if (cardnumber.length != 1) {
      setCardnumber(cardnumber + "");
    } else {
      setCardnumber("");
    }
  };
  const handlecardcvc = (e) => {
    if (isStateStillNumeric(e.target.value) && e.target.value.length < 5) {
      setCvc(e.target.value);
    } else if (cvc.length != 1) {
      setCvc(cvc + "");
    } else {
      setCvc("");
    }
  };
  const handlecardexmonth = (e) => {
    setMm(e.target.value);
  };
  const handlecardexyear = (e) => {
    setYy(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log({
      First_Name: firstName,
      Last_Name: lastName,
      Phone: phone,
      Adress: `${address}, ${city}, ${state}, ${
        countries[JSON.parse(country).country_id - 1].country_name
      }`,
      price: subtotalPrice,
      country: country,
    });
  };
  return (
    <div className="checkout__page__main">
      <div className="checkout__page__child">
        <div className="checkout__page__bill">
          <h2>Your Order</h2>
          <div className="checkout__page__ordered__items">
            {cartItems.map((item) => (
              <div className="checkout__page__ordered__item">
                <div className="item__img">
                  <img src={item.img} alt="" />
                </div>
                <div className="item__info">
                  <h3>Under Armour Men's Charged Assert 9 Running Shoe</h3>
                  <div className="item__size__color">
                    <span>
                      <b>Size: </b> 10
                    </span>
                    <span>
                      <b>Color: </b> lightgray
                    </span>
                  </div>
                  <div className="item_price">
                    <span>{item.price}</span>
                    <span>x {item.qty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total_bill_calculations">
            <div className="total_bill_amount_titles">
              <b>Subtotal</b>
              <b>Shipping</b>
              <b>Discount</b>
            </div>
            <div className="total_bill_amount_values">
              <span>${subtotalPrice.toFixed(2)}</span>
              <span>$20</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          </div>
          <div className="total_bill">
            <h2>Total</h2>
            <h2>${(subtotalPrice - discount + 20).toFixed(2)}</h2>
          </div>
          <label htmlFor="submit_button" style={{ width: "100%" }}>
            <button className="primary-button" style={{ width: "100%" }}>
              Confrim Order
            </button>
          </label>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="form_slots">
            <h1>Shiping adress</h1>
            <div className="costomer__name common__cards">
              <div className="costomer__first__name common__input">
                <label htmlFor="first_name">
                  First Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="costomer__last__name common__input">
                <label htmlFor="last_name">
                  Last Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  name="last_name"
                  id="last_name"
                />
              </div>
              <div className="costomer__phone common__input">
                <label htmlFor="phone">
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <div className="input">
                  <span>{code}</span>
                  <input
                    required
                    value={phone}
                    onChange={(e) => handlephone(e)}
                    type="text"
                    name="phone"
                    id="last_name"
                  />
                </div>
              </div>
            </div>
            <div className="costomer__street_adress common__cards">
              <div className="costomer_adress_street common__input">
                <label htmlFor="adress">
                  Adress <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  type="text"
                  name="adress"
                  id="adress"
                />
              </div>
              <div className="costomer_adress_city common__input">
                <label htmlFor="city">
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  name="city"
                  id="city"
                />
              </div>
            </div>
            <div className="costomer__country_adress common__cards">
              <div className="costomer_adress_country common__input">
                <label htmlFor="country">
                  Country <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  required
                  name="country"
                  id="country"
                  value={country}
                  onChange={handlecountry}
                >
                  <option value={""}>Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={JSON.stringify(country)}>
                      {country.country_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="costomer_adress_state common__input">
                <label htmlFor="state">
                  State <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  required
                  name="state"
                  id="state"
                  value={state}
                  onChange={handlestate}
                >
                  <option value={"init"}>Select State</option>
                  {states ? (
                    states.map((state, index) => (
                      <option key={index} value={state.state_name}>
                        {state.state_name}
                      </option>
                    ))
                  ) : (
                    <option>Select country</option>
                  )}
                </select>
              </div>
              <div className="costomer_adress_postal__code common__input">
                <label htmlFor="postal-code">
                  Postal Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  name="postal-code"
                  id="postal-code"
                />
              </div>
            </div>
          </div>
          <div className="costomer__card form_slots">
            <h1>Card Details</h1>
            <div className="card_info  common__cards">
              <div className="costomer__card_number common__input">
                <label htmlFor="card_number">
                  Card Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={cardnumber}
                  onChange={(e) => handlecardnumber(e)}
                  type="text"
                  name="card_number"
                  id="card_number"
                />
              </div>
              <div className="costomer__expire common__input">
                <label htmlFor="month">
                  Expiry Date <span style={{ color: "red" }}>*</span>
                </label>
                <div className="date__mm__yyyy">
                  {/* Months */}

                  <select
                    required
                    name="month"
                    className="input"
                    id="month"
                    value={mm}
                    onChange={handlecardexmonth}
                  >
                    <option value={""}>mm</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <span>/</span>

                  {/* Years   */}

                  <select
                    required
                    name="year"
                    className="input"
                    id="year"
                    value={yy}
                    onChange={handlecardexyear}
                  >
                    <option value={""}>yyyy</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="costomer__CVC common__input">
                <label htmlFor="cvc">
                  CVC <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  value={cvc}
                  onChange={(e) => handlecardcvc(e)}
                  name="cvc"
                  id="cvc"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
  cartItems: state.CartState,
  allShoes: state.ShoesState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(Checkout);
