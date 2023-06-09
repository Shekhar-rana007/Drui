import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { adduser, minusUser } from '../ReduxTookit/Slice/Userdata';
const Navbar = () => {
  const dispatch= useDispatch();
const data= useSelector(state=>state.userinfo);
const handleclick=(e)=>{
  e.preventDefault();
  dispatch(adduser(1));
  console.log(data)
}

const removehandleclick=(e)=>{
  e.preventDefault();
  dispatch(minusUser(1));
  console.log(data)
}
  return (
    <>
<button onClick={(e)=>handleclick(e)} >add</button>
<button onClick={(e)=>removehandleclick(e)} >minus</button>
<p>{data}</p>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src='https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png' />
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>

              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/doctor">Doctor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar