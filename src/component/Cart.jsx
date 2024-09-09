import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import { Quantity } from "./Quantity";
import EmptyCart from "./EmptyCart";
import { RiDeleteBin4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, quantity }) => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log("QUnatitu", quantity);
  useEffect(() => {
    const cartProd = localStorage.getItem("cartItems");
    if (cartProd) {
      const carts = JSON.parse(cartProd);
      setCartProducts(carts);
      console.log("Cartswss", cartProducts);
    }
  }, []);

  const removeCart = (itemId) => {
    const removedItems = cartProducts.filter((item) => item.id !== itemId);
    setCartProducts(removedItems);
    localStorage.setItem("cartItems", JSON.stringify(removedItems));
  };

  const handleQuantityChange = (prodId, size, newQuantity) => {
    setCartProducts((prevItems) =>
      prevItems.map((item) =>
        item.id === prodId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const totalPrice = cartProducts.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  console.log("Total", totalPrice);
  return (
    <section className="cart_page ">
      <div className="product_wrapper">
        {cartProducts.length > 0 ? (
          <div className="cart_wrapper flex">
            <div className="cart_table">
              <span className="cart_head">My Cart</span>
              <table>
                <tr>
                  <th className="size_lbl prod_">Product</th>
                  <th className="size_lbl">Quantity</th>
                  <th className="size_lbl">Price</th>
                </tr>

                {cartProducts &&
                  cartProducts.map((items) => {
                    return (
                      <tr key={items}>
                        <div className="flex cart_product">
                          <td className="cart_img">
                            <img src={items.image} alt="" />
                          </td>
                          <span className="size_lbl cart_prod_name">
                            {items.name}
                          </span>

                          <span className="size_lbl cart_prod_name">
                            {items.size}
                          </span>
                        </div>
                        <td>
                          <Quantity
                            quantity={items.quantity}
                            setQuantity={(newQuantity) =>
                              handleQuantityChange(
                                items.id,
                                items.size,
                                newQuantity
                              )
                            }
                          />
                        </td>
                        <td>Rs. {items.price * items.quantity}</td>
                        <td
                          onClick={() => removeCart(items.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <RiDeleteBin4Line />
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>

            <div className="summary flex_column">
              <span>Summary</span>
              <table>
                <tr>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>Rs. {totalPrice}</td>
                </tr>
              </table>
              <Link to={"/checkout"}>
                <button className="button">Checkout</button>
              </Link>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
