/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import MovieCard from "./componets/MovieCard";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Favorites from "./page/Favorites";
import Navbar from "./componets/Navbar";*/
//import DigitalClock from "./DigitalClock";
//import Note from "./Note";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./Pages/home/HomePage";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Orders from "./Pages/orders/OrdersPage";
import Tracking from "./Pages/TrackingPage";
function App() {
  /*
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );*/
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () =>
   { const response = await axios
      .get("/api/cart-items?expand=product")
      setCart(response.data)
      .catch((err) => console.error(err));}
      fetchAppData()
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
    //
  );
}

export default App;
