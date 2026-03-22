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
import { Routes,Route } from "react-router-dom"; 
import HomePage from "./Pages/HomePage";
import CheckoutPage from "./Pages/CheckoutPage";
import Orders from "./Pages/OrdersPage";
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
  return(
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/checkout" element={<CheckoutPage/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/tracking" element={<Tracking/>}/>
    </Routes>
    //

  )
}

export default App;
