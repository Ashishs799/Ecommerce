import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./Container";
import { Men } from "./Category/Men";
import { Women } from "./Category/Women";
import { Sneaker } from "./Category/Sneaker";
import { Footer } from "./component/Footer";
import { useState } from "react";
import ProductDetail from "./component/ProductDetail";
import SearchList from "./component/SearchList";
import collections from "./Data/collections";
import ScrollToTop from "./component/ScrollToTop";
function App() {
  const [hide, setHide] = useState(false);
  const hideSearchBar = () => {
    setHide(!hide);
  };
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar hideSearchBar={hideSearchBar} hide={hide} />

        <Routes>
          <Route
            path="/"
            element={<Container hideSearchBar={hideSearchBar} hide={hide} />}
          />
          <Route path="/category/men" element={<Men />} />
          <Route path="/category/women" element={<Women />} />
          <Route path="/category/shoes" element={<Sneaker />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="search"
            element={<SearchList products={collections} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
