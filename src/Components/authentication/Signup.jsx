import React, { useState } from 'react'
import {AiFillFacebook} from "react-icons/ai";
import {SlSocialGoogle} from "react-icons/sl";
import { NavLink, json, useNavigate } from 'react-router-dom';


function Signup() {
  const [fname, setfname]= useState("");
  const [lname, setlname]= useState("");
  const [email, setemail]= useState("");
  const [password, setpassword]= useState("");
  const navigate= useNavigate()

  const signupSubmit= async(e)=>{
    e.preventDefault();
  // const data= await fetch("http://localhost:8100/drdata", {
    const data= await fetch("http://localhost:8100/drapp/user/register", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({fname, lname, email, password}),}
  )
  const result= await data.json();
  localStorage.setItem("user",JSON.stringify(result));
//   setemail("")
// setfname("")
// setlname("")
// setpassword("")  
  if(result){
    navigate("/sign-in")
  }
}
 
  return (
   <>
     <section className="bg-half-150 d-table w-100  bg-light" style={{ background: "url('../assets/images/bg/bg-lines-one.png') center",padding:"123px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" height="22vh" className="mx-auto d-block" alt="" />
            <div className="card login-page shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">Sign Up</h4>
                <form  className="login-form mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" defaultValue={setfname} required onChange={(e)=>setfname(e.target.value)} placeholder="First Name" name="s" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" defaultValue={setlname} onChange={(e)=>setlname(e.target.value)} placeholder="Last Name" name="s" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" defaultValue={setemail} onChange={(e)=>setemail(e.target.value)}  placeholder="Email" name="email" required />
                      </div>
                    </div>
                  
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" defaultValue={setpassword}  onChange={(e)=>setpassword(e.target.value)} placeholder="Password" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="form-check">
                          <input className="form-check-input align-middle" type="checkbox" value="" id="accept-tnc-check" />
                          <label className="form-check-label" htmlFor="accept-tnc-check">I Accept <a href="#" className="text-primary">Terms And Condition</a></label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="d-grid">
                        <button className="btn btn-primary" onClick={(e)=>signupSubmit(e)}>Register</button>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-3 text-center">
                      <h6 className="text-muted">Or</h6>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-flex align-items-center justify-content-top">
                        <a href="" className="btn btn-soft-primary" style={{
                           textAlign: 'center',
                           verticalAlign: 'middle',
                           cursor: 'pointer',
                           userSelect: 'none',
                           backgroundColor: 'rgba(57,108,240,.1)',
                           border: '1px solid rgba(57,108,240,.1)',
                           color: '#396cf0',
                           boxShadow: '0 3px 5px 0 rgba(57,108,240,.3)',
                           padding: '8px 20px',
                           outline: '0',
                           fontSize: '15px',
                           letterSpacing: '.5px',
                           transition: 'all .3s',
                           borderRadius: '5px'
                        }}> <AiFillFacebook /> Facebook</a>
                      </div>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-grid">
                        <a href="" className="btn btn-soft-primary"
                        style={{
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          cursor: 'pointer',
                          userSelect: 'none',
                          backgroundColor: 'rgba(57,108,240,.1)',
                          border: '1px solid rgba(57,108,240,.1)',
                          color: '#396cf0',
                          boxShadow: '0 3px 5px 0 rgba(57,108,240,.3)',
                          padding: '8px 20px',
                          outline: '0',
                          fontSize: '15px',
                          letterSpacing: '.5px',
                          transition: 'all .3s',
                          borderRadius: '5px'
                       }}><SlSocialGoogle /> Google</a>
                      </div>
                    </div>

                    <div className="mx-auto">
                      <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <NavLink to="/sign-in" className="text-dark fw-bold">Sign in</NavLink></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
   
   </>
  )
}

export default Signup