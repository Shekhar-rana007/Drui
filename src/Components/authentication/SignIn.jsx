import React from 'react'
import {SlSocialGoogle} from "react-icons/sl"
import {AiFillFacebook} from "react-icons/ai"
import { NavLink } from 'react-router-dom'
function Signin() {
  return (
    <>
   
    <section className="bg-half-150  d-flex w-100 bg-light align-items-center" style={{ background: "url('../assets/images/bg/bg-lines-one.png') center",padding:"123px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" height="22" className="mx-auto d-block" alt="" />
            <div className="card login-page shadow mt-4 rounded border-0">
              <div className="card-body">
                <h4 className="text-center">Sign In</h4>
                <form action="doctor-dashboard.html" className="login-form mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="Email" name="email" required />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" placeholder="Password" required />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <div className="mb-3">
                          <div className="form-check">
                            <input className="form-check-input align-middle" type="checkbox" value="" id="remember-check" />
                            <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                          </div>
                        </div>
                        <a href="forgot-password.html" className="text-dark h6 mb-0">Forgot password ?</a>
                      </div>
                    </div>
                    <div className="col-lg-12 mb-0">
                      <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                      </div>
                    </div>

                    <div className="col-lg-12 mt-3 text-center">
                      <h6 className="text-muted">Or</h6>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="d-flex align-items-center justify-content-center">
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
                        <NavLink to="" className="btn btn-soft-primary"
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
                       }}><SlSocialGoogle /> Google</NavLink>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <NavLink to="/sign-up" className="text-dark fw-bold">Sign-up</NavLink></p>
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

export default Signin