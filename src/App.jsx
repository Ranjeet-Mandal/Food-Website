import React, { useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import PlaceOrder from "./Pages/PlaceOrder/Place0rder";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App  = ()=>{
const [showLogin, setShowLogin] = useState(false);

  return<>
  {showLogin?<LoginPopup setShowLogin={setShowLogin} ></LoginPopup>:<></>}
  <div className="app">
    <Navbar setShowLogin={setShowLogin} ></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
    </Routes>
  </div>
  <Footer></Footer>
  </> 
}

export default App;