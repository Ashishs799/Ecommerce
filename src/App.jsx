import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./Container";
import { Men } from "./Category/Men";
import { Women } from "./Category/Women";
import { Sneaker } from "./Category/Sneaker";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/category/men" element={<Men />} />
          <Route path="/category/women" element={<Women />} />
          <Route path="/category/shoes" element={<Sneaker />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
