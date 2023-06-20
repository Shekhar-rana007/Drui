import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth= localStorage.getItem("user");

  return auth? <Outlet /> :<NavLink to="/sign-up" /> 
}

export default PrivateComponent