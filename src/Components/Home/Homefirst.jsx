import React from 'react'
import { AiOutlineArrowRight, AiOutlineUser, AiOutlineSearch } from "react-icons/ai"
import { GiMedicines } from "react-icons/gi"
import { FaMicroscope, FaAmbulance } from "react-icons/fa";
import { BsShieldFillPlus } from "react-icons/bs"

const Homefirst = () => {

  return (
    <>

      <section className="bg-half-170 pb-0 d-table w-100">
        <div className="container">
          <div className="row mt-5 mt-sm-0 align-items-center">
            <div className="col-md-6">
              <div className="heading-title">
                <h4 className="heading mb-3 fw-bold" style={{fontSize:"40px"}}>Find Best Doctor</h4>
                <p className="para-desc text-muted mb-0" style={{fontSize:"18px"}}>Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation.</p>
              </div>
              <div className="subcribe-form mt-4">
                <form className="ms-0" style={{ maxWidth: '550px' }}>
                  <div className="mb-2 d-flex align-items-center justify-content-center">
                    <input type="text" id="name" name="name" className="border rounded-pill border border-gray-300 px-3 py-2 w-100 text-dark bg-white" style={{
                      paddingRight: '160px',
                      paddingLeft: '30px',
                      height: '50px'
                    }} required placeholder="Doctor name..." />
                    <button type="submit" className="btn btn-pills btn-primary" style={{
                      textDecoration: 'none',
                      fontSize: '15px',
                      letterSpacing: '.5px',
                      position: 'absolute',
                      top: '410px',
                      left: '520px',
                      outline: '0',
                      cursor: 'pointer',
                      borderRadius: '30px',
                      padding: '12px 30px',
                    }}><AiOutlineSearch /> Search</button>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="text-muted mb-0"><b>Note:</b> Please search best doctors here,</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/hero.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/spotify.png" className="avatar avatar-client" alt=""
                style={{ maxHeight: "25px" }} />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/shopify.png" className="avatar avatar-client" alt="" style={{ maxHeight: "25px" }} />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/paypal.png" className="avatar avatar-client" alt="" style={{ maxHeight: "25px" }} />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/lenovo.png" className="avatar avatar-client" alt="" style={{ maxHeight: "25px" }} />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/google.png" className="avatar avatar-client" alt="" style={{ maxHeight: "25px" }} />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center py-4">
              <img src="https://shreethemes.in/doctris/layouts/assets/images/client/amazon.png" className="avatar avatar-client" alt="" style={{ maxHeight: "25px" }} />
            </div>
          </div>
        </div>
      </section>


      <section className="section" style={{ marginBottom: "30px" }}>
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2" style={{
                fontSize: "24px!important", letterSpacing: ".5px"
              }}>
                <h4 className="title mb-4 mt-5">Explore By Categories</h4>
                <p className="text-muted mx-auto para-desc mb-0" style={{ maxWidth: "600px", color: "#8492a6!important" }}>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center" style={{ position: "relative", marginBottom: "60px" }}>
            <div className="col-xl col-md-2 col-12 mt-4 pt-2" style={{ padding: "0.5rem!important", marginTop: "1.5rem !important", width: "220px" }}>
              <div className="card features feature-primary border-0 p-4 rounded-md shadow" style={{ borderRadius: "10px" }}>
                <div className="icon text-center rounded-lg d-flex justify-content-center align-items-center" style={{ height: "65px", color: " #396cf0!important", maxWidth: "65px", borderRadius: "50%", background: "rgba(57,108,240,.05)" }}>
                  <AiOutlineUser fontSize={50} color='blue' />
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="departments.html" className="title text-dark h5">Doctors</a>
                  <p className="text-muted mt-3" style={{ width: "100%" }}>Due to its wide spread use as filler text</p>
                  <a href="departments.html" className="link" style={{ color: "#396cf0!important" }}>Find here
                    <AiOutlineArrowRight className='ms-2' fontSize={20} /> </a>
                </div>
              </div>
            </div>

            <div className="col-xl col-md-2 col-12 mt-4 pt-2" style={{ padding: "0.5rem!important", marginTop: "1.5rem !important", width: "220px" }}>
              <div className="card features feature-primary border-0 p-4 rounded-md shadow" style={{ borderRadius: "10px" }}>
                <div className="icon text-center rounded-lg d-flex justify-content-center align-items-center" style={{ height: "65px", color: " #396cf0!important", borderRadius: "50%", maxWidth: "65px", background: "rgba(57,108,240,.05)" }}>
                  <GiMedicines fontSize={50} color='blue' />
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="departments.html" className="title text-dark h5">Doctors</a>
                  <p className="text-muted mt-3" style={{ width: "100%" }}>Due to its wide spread use as filler text</p>
                  <a href="departments.html" className="link" style={{ color: "#396cf0!important" }}>Find here
                    <AiOutlineArrowRight className='ms-2' fontSize={20} /> </a>
                </div>
              </div>
            </div>

            <div className="col-xl col-md-2 col-12 mt-4 pt-2" style={{ padding: "0.5rem!important", marginTop: "1.5rem !important", width: "220px" }}>
              <div className="card features feature-primary border-0 p-4 rounded-md shadow" style={{ borderRadius: "10px" }}>
                <div className="icon text-center rounded-lg d-flex justify-content-center align-items-center" style={{ height: "65px", color: " #396cf0!important", borderRadius: "50%", maxWidth: "65px", background: "rgba(57,108,240,.05)" }}>
                  <FaMicroscope fontSize={50} color='blue' />
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="departments.html" className="title text-dark h5">Doctors</a>
                  <p className="text-muted mt-3" style={{ width: "100%" }}>Due to its wide spread use as filler text</p>
                  <a href="departments.html" className="link" style={{ color: "#396cf0!important" }}>Find here
                    <AiOutlineArrowRight className='ms-2' fontSize={20} /> </a>
                </div>
              </div>
            </div>


            <div className="col-xl col-md-2 col-12 mt-4 pt-2" style={{ padding: "0.5rem!important", marginTop: "1.5rem !important", width: "220px" }}>
              <div className="card features feature-primary border-0 p-4 rounded-md shadow" style={{ borderRadius: "10px" }}>
                <div className="icon text-center rounded-lg d-flex justify-content-center align-items-center" style={{ height: "65px", color: " #396cf0!important", borderRadius: "50%", maxWidth: "65px", background: "rgba(57,108,240,.05)" }}>
                  <FaAmbulance fontSize={50} color='blue' />
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="departments.html" className="title text-dark h5">Doctors</a>
                  <p className="text-muted mt-3" style={{ width: "100%" }}>Due to its wide spread use as filler text</p>
                  <a href="departments.html" className="link" style={{ color: "#396cf0!important" }}>Find here
                    <AiOutlineArrowRight className='ms-2' fontSize={20} /> </a>
                </div>
              </div>
            </div>


            <div className="col-xl col-md-2 col-12 mt-4 pt-2" style={{ padding: "0.5rem!important", marginTop: "1.5rem !important", width: "220px" }}>
              <div className="card features feature-primary border-0 p-4 rounded-md shadow" style={{ borderRadius: "10px" }}>
                <div className="icon text-center rounded-lg d-flex justify-content-center align-items-center" style={{ height: "65px", color: " #396cf0!important", borderRadius: "50%", maxWidth: "65px", background: "rgba(57,108,240,.05)" }}>
                  <BsShieldFillPlus fontSize={50} color='blue' />
                </div>
                <div className="card-body p-0 mt-3">
                  <a href="departments.html" className="title text-dark h5">Doctors</a>
                  <p className="text-muted mt-3" style={{ width: "100%" }}>Due to its wide spread use as filler text</p>
                  <a href="departments.html" className="link" style={{ color: "#396cf0!important" }}>Find here
                    <AiOutlineArrowRight className='ms-2' fontSize={20} /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section" style={{ paddingBottom: "60px" }}>
        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="section-title me-lg-5">
                <span className="badge rounded-pill bg-soft-primary" style={{
                  borderRadius: 'var(--bs-border-radius-pill)',
                  backgroundColor: 'rgba(57,108,240,.1)',
                  border: '1px solid rgba(57,108,240,.1)',
                  color: '#396cf0',
                  display: 'inline-block',
                  letterSpacing: '.5px',
                  padding: '4px 8px',
                  fontWeight: 600,
                  lineHeight: 1,
                  textAlign: 'center'
                }}>About Doctris</span>
                <h4 className="title mt-3 mb-4">Good Services And Better <br /> Health By Our Specialists</h4>
                <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment, or a simple consultation.</p>
                <p className="para-desc text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                <div className="mt-4">
                  <a href="aboutus.html" className="btn btn-soft-primary" style={{
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
                  }} >Read More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="position-relative">
                <img src="https://shreethemes.in/doctris/layouts/assets/images/about/about-2.png" className="img-fluid" alt="" />
                <div className="play-icon">
                  <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="play-btn lightbox video-play-icon">
                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Homefirst