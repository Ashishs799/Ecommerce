import React, { useState, useEffect } from "react";
import "../styles/Checkout.css";
import Visa from "../media/visa.png";
import Mastercard from "../media/mastercard.png";

export const Checkout = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  const showCredit = () => {
    setShowCreditCard(true);
  };
  const hideCredit = () => {
    setShowCreditCard(false);
  };

  useEffect(() => {
    const cartProd = localStorage.getItem("cartItems");
    if (cartProd) {
      const carts = JSON.parse(cartProd);
      setCartProducts(carts);
    }
  }, []);

  const totalPrice = () => {
    const result = cartProducts.reduce((sum, prods) => {
      return sum + prods.price * prods.quantity;
    }, 0);
    setSubtotal(result);
  };

  useEffect(() => {
    totalPrice();
  }, [cartProducts]);

  return (
    <section className="chekout_section cart_page">
      {/* <div className="checkout_head">
        <span className="cart_head">Checkout</span>
      </div> */}
      <div className="checkout_wrapper flex">
        <div className="form">
          <form action="">
            <div className="flex_column email_phone">
              <span>Customer Information</span>
              <div className="delivery_info">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  id="email_phn"
                />
                <br />
                <label htmlFor="email_phn" className="label">
                  Email or phone number *
                </label>
              </div>
            </div>
            <div className="details">
              <span>Delivery Details</span>
              <div className="grid">
                <div className="delivery_info">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First name *"
                  />
                  <br />
                  <label htmlFor="firstname" className="label">
                    First name *
                  </label>
                </div>
                <div className="delivery_info">
                  <input type="text" id="lastname" placeholder="Last name *" />
                  <br />
                  <label htmlFor="lastname" className="label">
                    Last name *
                  </label>
                </div>
                <div className="delivery_info">
                  <input type="text" id="address" placeholder="Address *" />
                  <br />
                  <label htmlFor="address" className="label">
                    Address *
                  </label>
                </div>
                <div className="delivery_info">
                  <input type="text" id="city" placeholder="City *" />
                  <br />
                  <label htmlFor="city" className="label">
                    City *
                  </label>
                </div>
                <div className="delivery_info">
                  <input type="text" id="phone" placeholder="Phone *" />
                  <br />
                  <label htmlFor="phone" className="label">
                    Phone *
                  </label>
                </div>
              </div>
            </div>
            <div className="payment ">
              <span>Payment</span>
              <div className="flex_column payment_wrapper">
                <div className="radio" onClick={showCredit}>
                  <input type="radio" name="radio" id="credit" />
                  <label htmlFor="credit">Credit card</label>
                  <div className="payment_methods">
                    <img src={Visa} alt="" />
                    <img src={Mastercard} alt="" />
                  </div>
                </div>
                <div
                  className={
                    showCreditCard ? "credit_info showCredit" : "credit_info "
                  }
                >
                  <div className="delivery_info">
                    <input
                      type="text"
                      id="card_number"
                      placeholder="Card Number *"
                    />
                    <br />
                    <label htmlFor="card_number" className="label">
                      Card Number *
                    </label>
                  </div>
                  <div className="delivery_info">
                    <input
                      type="text"
                      id="exp_date"
                      placeholder="Expiration date (MM/YY) *"
                    />
                    <br />
                    <label htmlFor="exp_date" className="label">
                      Expiration date (MM/YY) *
                    </label>
                  </div>
                  <div className="delivery_info">
                    <input
                      type="text"
                      id="card_name"
                      placeholder="Name on card *"
                    />
                    <br />
                    <label htmlFor="card_name" className="label">
                      Name on card *
                    </label>
                  </div>
                </div>
                <div className="radio" onClick={hideCredit}>
                  <input type="radio" name="radio" id="cod" />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
              </div>
            </div>
          </form>
          <button className="button paybtn">Pay now</button>
        </div>
        <div className="prod_details">
          <span className="span_summary">
            Order Summary ({cartProducts.length})
          </span>
          {cartProducts &&
            cartProducts.map((prod) => (
              <div className="flex products">
                <div className="flex img_name_size">
                  <img src={prod.image} alt="" />
                  <div className="flex_column name_size">
                    <span>{prod.name}</span>
                    <span>{prod.size}</span>
                  </div>
                </div>
                <span className="checkout_price">
                  Rs. {prod.price * prod.quantity}
                </span>
              </div>
            ))}
          <div className="delivery_info coupon_code">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="coupon"
            />
            <button type="button" className="button apply_btn">
              Apply
            </button>
          </div>
          <div className="totalling">
            <div className="flex_btn">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>
            <div className="flex_btn">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <div className="flex_btn total">
            <span>Total</span>
            <span>Rs. {subtotal}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
