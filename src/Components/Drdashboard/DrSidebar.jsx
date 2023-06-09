import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import { FiAirplay } from 'react-icons/fi'
import {BsFillCalendarCheckFill,BsFillEnvelopeFill,BsFillStopwatchFill,BsFillChatDotsFill} from "react-icons/bs"
import {AiOutlineUser,AiOutlineArrowRight,AiOutlineLogin,AiFillHeart,AiTwotonePropertySafety,AiOutlineHourglass} from "react-icons/ai"
import {RiUserSettingsLine,RiDeviceRecoverFill} from "react-icons/ri"
import {MdPreview} from "react-icons/md"
import {BiMessageRoundedDetail} from "react-icons/bi"

import {CgUserlane} from "react-icons/cg"
import {TbFileInvoice}  from "react-icons/tb"
const DrSidebar = () => {
    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      color:"B04759",

      }],

        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      };
const [state,setstate]= useState( options)
    
  return (
 <>
 <section >
    <div className="container-fluid">
        <div className="row ">
        <div className="col-xl-3 col-lg-4 col-md-5 col-12 ">
    <div className="rounded shadow overflow-hidden ">
      <div className="card border-0  ">
        <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/profile-bg.jpg" className="img-fluid" alt="" />
      </div>

      <div className="text-center avatar-profile position-relative pb-4 border-bottom">
        <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" className="rounded-circle shadow-md avatar position-absolute avatar-md-md" alt="" style={{width:"80px", height:"80px", top:"-85px", left:"110px"}} />
        <h5 className="mt-5 mb-1">Dr. Calvin Carlo</h5>
        <p className="text-muted mb-0">Orthopedic</p>
      </div>

      <ul className="list-unstyled sidebar-nav mb-3 d-flex justify-content-center flex-column  ms-5 p-3 ">
        <li className="navbar-item active  "><a href="doctor-dashboard.html  "
         style={{fontSize:"15px", marginBottom:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder ">
        <FiAirplay size={20}  style={{marginRight:"15px"}} /> Dashboard</a></li>
        <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <BsFillCalendarCheckFill size={20} style={{marginRight:"15px"}} />
            Appointment</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
       <BsFillStopwatchFill  size={20}  style={{marginRight:"15px"}} />     Schedule Timing</a></li>
       <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
        <TbFileInvoice  size={20}  style={{marginRight:"15px"}} />     Invoices</a></li>
        <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
        <BsFillEnvelopeFill  size={20}  style={{marginRight:"15px"}} /> Messages</a></li>
        <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <AiOutlineUser  size={20}  style={{marginRight:"15px"}} /> Profile</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
        <RiUserSettingsLine  size={20}  style={{marginRight:"15px"}} /> Profile Settings</a></li>
        <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <CgUserlane  size={20}  style={{marginRight:"15px"}} /> Patients</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <MdPreview  size={20}  style={{marginRight:"15px"}} /> Patients Review</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <BsFillChatDotsFill  style={{marginRight:"15px"}} size={20} /> Chat</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bolder">
            <AiOutlineLogin  style={{marginRight:"15px"}} size={20} /> Login</a></li>
            <li className="navbar-item active"><a href="doctor-dashboard.html "
         style={{fontSize:"15px", textDecoration:"none", listStyle:"none", color:"black"}}className="navbar-link fw-bold">
            <RiDeviceRecoverFill  style={{marginRight:"15px"}}  size={20} /> Forgot Password</a></li>
      </ul>
    </div>
  </div>

  <div className="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0 ">
    <div className="row">
      <h5 className="mb-0">Dashboard</h5>
        <div className="col-xl-3 col-lg-6 mt-4 ">
        <div className="card shadow border-0 p-4 ">
      <div className="d-flex justify-content-between  mb-2">
        <h6 className="align-items-center mb-0 fw-bolder">Appointment <span className="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
        <p className="mb-0 text-muted">220+ Week</p>
      </div>
      <div id="chart-1" style={{ minHeight: '90px',marginLeft:"-20px", marginTop:"15px" }} >
      <Chart options={state} series={state.series} width={190} height={150} />
        
      </div>
        </div>      
        </div>

        <div className="col-xl-3 col-lg-6 mt-4 ">
        <div className="card shadow border-0 p-4">
      <div className="d-flex justify-content-around  mb-3">
        <h6 className="align-items-center mb-0 fw-bolder">Appointment <span className="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
        <p className="mb-0 text-muted">220+ Week</p>
      </div>
      <div id="chart-1" style={{ minHeight: '90px',marginLeft:"-20px", marginTop:"15px" }} >
      <Chart options={state} series={state.series} width={190} height={150} />
        
      </div>
        </div>      
        </div>

        <div className="col-xl-3 col-lg-6 mt-4">
        <div className="card shadow border-0 p-4">
      <div className="d-flex justify-content-between  mb-3">
        <h6 className="align-items-center mb-0 fw-bolder">Appointment <span className="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
        <p className="mb-0 text-muted">220+ Week</p>
      </div>
      <div id="chart-1" style={{ minHeight: '90px',marginLeft:"-20px", marginTop:"15px" }} >
      <Chart options={state} series={state.series} width={190} height={150} />
        
      </div>
        </div>      
        </div>

         
        <div className="col-xl-3 col-lg-6 mt-4">
        <div className="card shadow border-0 p-4">
      <div className="d-flex justify-content-between  mb-3">
        <h6 className="align-items-center mb-0 fw-bolder">Appointment <span className="badge rounded-pill bg-soft-primary ms-1">+15%</span></h6>
        <p className="mb-0 text-muted">220+ Week</p>
      </div>
      <div id="chart-1" style={{ minHeight: '90px',marginLeft:"-20px", marginTop:"15px" }} >
      <Chart options={state} series={state.series}   width={190} height={150} />
        
      </div>
        </div>      
        </div>
    </div>
    



    <div className="row ">

      <div className="col-xl-4 col-lg-6 mt-4">
        <div className="card border-0 shadow rounded">
          <div className="d-flex justify-content-between p-4 border-bottom">
            <h6 className="mb-0"><i className="uil uil-calender text-primary me-1 h5"></i> Latest Appointment</h6>
            <h6 className="text-muted mb-0">55 Patients</h6>
          </div>

          <ul className="list-unstyled mb-0 p-4">
            <li>
              <a href="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/client/01.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
    height: '45px',
    width: '45px'}} />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                      <small className="text-muted">Booking on 27th Nov, 2020</small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/client/02.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
    height: '45px',
    width: '45px'}} />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Joya Khan</h6>
                      <small className="text-muted">Booking on 27th Nov, 2020</small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/client/03.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
    height: '45px',
    width: '45px'}} />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Amelia Muli</h6>
                      <small className="text-muted">Booking on 27th Nov, 2020</small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/client/04.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
    height: '45px',
    width: '45px'}} />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Nik Ronaldo</h6>
                      <small className="text-muted">Booking on 27th Nov, 2020</small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <img src="https://shreethemes.in/doctris/layouts/assets/images/client/05.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
    boxSizing: 'border-box',
    borderRadius: '50%',
    boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
    height: '45px',
    width: '45px'}}/>
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Crista Joseph</h6>
                      <small className="text-muted">Booking on 27th Nov, 2020</small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="col-xl-4 col-lg-6 mt-4">
      <div className="card border-0 shadow rounded">
        <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
          <h6 className="mb-0 d-inline-flex">
            <i className="uil uil-calendar-alt text-primary me-1 h5"></i> Upcoming Appointment
          </h6>
          <h6 className="text-muted mb-0">55 Patients</h6>
        </div>

        <ul className="list-unstyled mb-0 p-4">
          <li>
            <a href="script:void(0)">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex">
                  <img
                    src="https://shreethemes.in/doctris/layouts/assets/images/client/06.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt=""
                    style={{
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
                        height: '45px',
                        width: '45px'}}
                  />
                  <div className="ms-3">
                    <h6 className="text-dark mb-0 d-block">Cristino Murphy</h6>
                    <small className="text-muted">Booking on 27th Nov, 2020</small>
                  </div>
                </div>
                <i className="uil uil-arrow-right h4 text-dark"></i>
              </div>
            </a>
          </li>

          <li className="mt-4">
            <a href="">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex">
                  <img
                    src="https://shreethemes.in/doctris/layouts/assets/images/client/07.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt=""
                    style={{
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
                        height: '45px',
                        width: '45px'}}
                  />
                  <div className="ms-3">
                    <h6 className="text-dark mb-0 d-block">Nick Jons</h6>
                    <small className="text-muted">Booking on 27th Nov, 2020</small>
                  </div>
                </div>
                <i className="uil uil-arrow-right h4 text-dark"></i>
              </div>
            </a>
          </li>

          <li className="mt-4">
            <a href="">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex">
                  <img
                    src="https://shreethemes.in/doctris/layouts/assets/images/client/08.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt=""
                    style={{
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
                        height: '45px',
                        width: '45px'}}
                  />
                  <div className="ms-3">
                    <h6 className="text-dark mb-0 d-block">Alex Dirio</h6>
                    <small className="text-muted">Booking on 27th Nov, 2020</small>
                  </div>
                </div>
                <i className="uil uil-arrow-right h4 text-dark"></i>
              </div>
            </a>
          </li>

          <li className="mt-2">
            <a href="">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex">
                  <img
                    src="https://shreethemes.in/doctris/layouts/assets/images/client/09.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt="" style={{
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
                        height: '45px',
                        width: '45px'}}
                  />
                  <div className="ms-3">
                    <h6 className="text-dark mb-0 d-block">Vrunda Koli</h6>
                    <small className="text-muted">Booking on 27th Nov, 2020</small>
                  </div>
                </div>
                <i className="uil uil-arrow-right h4 text-dark"></i>
              </div>
            </a>
          </li>

          <li className="mt-4">
            <a href="">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-inline-flex">
                  <img
                    src="https://shreethemes.in/doctris/layouts/assets/images/client/10.jpg"
                    className="avatar avatar-md-sm rounded-circle border shadow"
                    alt="" style={{
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)',
                        height: '45px',
                        width: '45px'}}
                  />
                  <div className="ms-3">
                    <h6 className="text-dark mb-0 d-block">Aisha Low</h6>
                    <small className="text-muted">Booking on 27th Nov, 2020</small>
                  </div>
                </div>
                <i className="uil uil-arrow-right h4 text-dark"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
      


    <div className="col-xl-4 col-lg-12 mt-4">
      <div className="card border-0 shadow rounded">
        <div className="p-4 border-bottom">
          <h6 className="mb-0">Patient's Review</h6>
        </div>

        <div className="p-4">
          <div className="tns-outer" id="tns1-ow">
            <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
              slide <span className="current">4</span> of 6
            </div>
            <div id="tns1-mw" className="tns-ovh">
              <div className="tns-inner" id="tns1-iw">
              <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
   
    <div className="carousel-item" data-bs-interval="1000">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>shekhar</h5>
        <p>" It seems that only melodies in order to have a 'ready-made' text to sing with the melody of the originalthe 'Lorem Ipsum', which is said to have originated century. "    
- Thomas Israel C.E.O
</p>
      </div>
    </div>
 
  </div>


  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


              </div>
            </div>
            <div className="tns-nav" aria-label="Carousel Pagination">
              <button type="button" data-nav="0" aria-controls="tns1"  aria-label="Carousel Page 1" className=""></button>
              <button type="button" data-nav="1" aria-controls="tns1"  aria-label="Carousel Page 2" className="" ></button>
              <button type="button" data-nav="2" aria-controls="tns1"  aria-label="Carousel Page 3" className=""></button>
              <button type="button" data-nav="3" aria-controls="tns1"  aria-label="Carousel Page 4 (Current Slide)" className="tns-nav-active"></button>
              <button type="button" data-nav="4" aria-controls="tns1"  aria-label="Carousel Page 5" className="" ></button>
              <button type="button" data-nav="5" aria-controls="tns1"  aria-label="Carousel Page 6" className="" ></button>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md col-6 text-center pt-3">
              <img src="../assets/images/client/amazon.png" className="avatar avatar-client" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> 
          

          <div className="col-xl-3 col-md-6 mt-4">
      <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
        <div className="icon text-center rounded-lg mx-auto"  style={{
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        borderRadius: '30px',
        height: '65px',
        width: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#396cf0',
        backgroundColor: 'rgba(57,108,240,.05)',
      }}>
         <BiMessageRoundedDetail size={35} />
        </div>
        <div className="card-body p-0 mt-3">
          <a href="" className="title text-dark h5" style={{listStyle:"none",textDecoration:"none", color:"black"}}>New Messages</a>
          <p className="text-muted my-2">Due to its widespread use as filler text</p>
          <a href="" className="link" style={{listStyle:"none",textDecoration:"none", color:"blue"}}>Read more <AiOutlineArrowRight /></a>
        </div>
      </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mt-4">
      <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
        <div className="icon text-center rounded-lg mx-auto" style={{
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        borderRadius: '30px',
        height: '65px',
        width: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#396cf0',
        backgroundColor: 'rgba(57,108,240,.05)',
      }}>
         <AiTwotonePropertySafety size={35} />
        </div>
        <div className="card-body p-0 mt-3">
          <a href="" className="title text-dark h5"style={{listStyle:"none",textDecoration:"none", color:"black"}}>Latest Proposals</a>
          <p className="text-muted my-2">Due to its widespread use as filler text</p>
          <a href="" className="link" style={{listStyle:"none",textDecoration:"none", color:"blue"}}>View more <AiOutlineArrowRight /></a>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mt-4">
      <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
        <div className="icon text-center rounded-lg mx-auto" style={{
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        borderRadius: '30px',
        height: '65px',
        width: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#396cf0',
        backgroundColor: 'rgba(57,108,240,.05)',
      }}>
          <AiOutlineHourglass size={35} />
        </div>
        <div className="card-body p-0 mt-3">
          <a href="" className="title text-dark h5" style={{listStyle:"none",textDecoration:"none", color:"black"}}>Package Expiry</a>
          <p className="text-muted my-2">Due to its widespread use as filler text</p>
          <a href="" className="link"
          style={{listStyle:"none",textDecoration:"none", color:"blue"}}>Check here <AiOutlineArrowRight /></a>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mt-4">
                                <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                                    <div className="icon text-center rounded-lg mx-auto" style={{
        wordWrap: 'break-word',
        boxSizing: 'border-box',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        borderRadius: '30px',
        height: '65px',
        width: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#396cf0',
        backgroundColor: 'rgba(57,108,240,.05)',
      }}>
                                       <AiFillHeart size={35} />
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <a href="" className="title text-dark h5" style={{listStyle:"none",textDecoration:"none", color:"black"}}>Saved Items</a>
                                        <p className="text-muted my-2">Due to its wide spread use as filler text</p>
                                        <a href=""  style={{listStyle:"none",textDecoration:"none", color:"blue"}}>View items <AiOutlineArrowRight /></a>
                                    </div>
                                </div>
                            </div>


    </div>

    
   
 
    


    </div>
    
    </div>

    </div>
 </section>
 
 
 </>
  )
}

export default DrSidebar