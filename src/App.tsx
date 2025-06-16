import { Route, Routes } from "react-router";
import "./App.css";
import { useState } from "react";
import type { IProducts } from "./@types/index.d";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [cartProducts, setCartProducts] = useState<IProducts[]>([]);

  const handleAddToCart = (product: IProducts) => {
    setCartProducts([...cartProducts, product]);
  };

  return (
    <div className="app">
      <Header cartProducts={cartProducts} />
      <Routes>
        <Route path="/" element={<HomePage addProduct={handleAddToCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
