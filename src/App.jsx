import "./App.css";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./Container";
import { Router } from "./Router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
