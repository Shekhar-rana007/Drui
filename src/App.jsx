import React from "react"
import HomeMain from "./Components/Home/HomeMain"
import Drsectionmain from "./Components/Drdashboard/Drsectionmain"
import { Routes, Route } from "react-router-dom"
import Drshop from "./Shop/Drshop"
import Navbar from "./Components/Navbar"
import Cart from "./Components/cart/Cart"
import Signin from "./Components/authentication/SignIn"
import Signup from "./Components/authentication/Signup"
import Applydr from "./Pages/Applydr"
import Appointment from "./Pages/Appointment"
import AppointmentPopup from "./Pages/appointmentPopup"
// import PrivateComponent from "./Components/PrivateComponent"
function App() {
 

  return (
    <>
<Navbar />  
<Routes>
{/* <Route element={<PrivateComponent />} > */}
<Route path="/" element={<HomeMain />}/>
<Route path="/doctor" element={<Drsectionmain />}/>
<Route path="/shop" element={<Drshop />}/>  
<Route path="/cart" element={<Cart />}/>  
<Route path="/applyDoctor" element={<Applydr />}/>  
<Route path="/sign-in" element={<Signin />}/>  
<Route path="/appointment" element={<Appointment />}/>  
<Route path="/appointmentPopups" element={<AppointmentPopup />}/>  
{/* </Route> */}
<Route path="/sign-up" element={<Signup />}/>  
</Routes>
 

   
    </>
  )
}

export default App
