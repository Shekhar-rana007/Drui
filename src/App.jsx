import React from "react"
import HomeMain from "./Components/Home/HomeMain"
import Drsectionmain from "./Components/Drdashboard/Drsectionmain"
import { Routes, Route } from "react-router-dom"
import Drshop from "./Shop/Drshop"
import Navbar from "./Components/Navbar"
import Cart from "./Components/cart/Cart"
function App() {
 

  return (
    <>
<Navbar />  
<Routes>
<Route path="/" element={<HomeMain />}/>
<Route path="/doctor" element={<Drsectionmain />}/>
<Route path="/shop" element={<Drshop />}/>  
<Route path="/cart" element={<Cart />}/>  
</Routes>
 

   
    </>
  )
}

export default App
