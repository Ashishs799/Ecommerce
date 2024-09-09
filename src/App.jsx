import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./Container";
import { Men } from "./Category/Men";
import { Women } from "./Category/Women";
import { Sneaker } from "./Category/Sneaker";
import { Footer } from "./component/Footer";
import { useEffect, useState } from "react";
import ProductDetail from "./component/ProductDetail";
import SearchList from "./component/SearchList";
import collections from "./Data/collections";
import ScrollToTop from "./component/ScrollToTop";
import Cart from "./component/Cart";
import { Checkout } from "./component/Checkout";
function App() {
  const [hide, setHide] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const hideSearchBar = () => {
    setHide(!hide);
  };

  const addToCart = (prodId, size, quantity) => {
    const prodItem = collections.find((prod) => prod.id === prodId);
    const newCartItem = { ...prodItem, size: size, quantity: quantity };
    setCartItems((prevItems) => {
      const existItemIndex = prevItems.findIndex(
        (item) => item.id === prodId && item.size === size
      );
      if (existItemIndex !== -1) {
        const updatedCart = [...prevItems];
        updatedCart[existItemIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevItems, newCartItem];
    });
  };
  useEffect(() => {
    if (cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar
          hideSearchBar={hideSearchBar}
          hide={hide}
          cartItems={cartItems}
        />

        <Routes>
          <Route
            path="/"
            element={<Container hideSearchBar={hideSearchBar} hide={hide} />}
          />
          <Route path="/category/men" element={<Men />} />
          <Route path="/category/women" element={<Women />} />
          <Route path="/category/shoes" element={<Sneaker />} />
          <Route
            path="/product/:productId"
            element={
              <ProductDetail
                addToCart={addToCart}
                cartItems={cartItems}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="search"
            element={<SearchList products={collections} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />}
            quantity={quantity}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
