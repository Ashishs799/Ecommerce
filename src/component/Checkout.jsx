import React from "react";
import "../styles/Checkout.css";
export const Checkout = () => {
  return (
    <section className="chekout_section cart_page">
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
                  Email or phone numbe *
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
          </form>
        </div>
        <div className="prod_details ">
          <h1>Billing</h1>
        </div>
      </div>
    </section>
  );
};
