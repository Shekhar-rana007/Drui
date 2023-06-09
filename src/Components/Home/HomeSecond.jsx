import React from 'react'
import { BiBriefcaseAlt2 } from "react-icons/bi"
import { FiAirplay,FiFacebook,FiLinkedin,FiTwitter,FiGithub } from "react-icons/fi"
import { ImLocation } from "react-icons/im"
import { MdFlip } from "react-icons/md"
import { BsClock } from "react-icons/bs"
import { BiDollarCircle } from "react-icons/bi"
import ReactStars from 'react-stars'

const HomeSecond = () => {

    const sectionStyle = {
        background: "url('https://shreethemes.in/doctris/layouts/assets/images/cta.jpg') center center",
        fontWeight: "var(--bs-body-font-weight)",
        lineHeight: "var(--bs-body-line-height)",
        textAlign: "var(--bs-body-text-align)",
        WebkitTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "transparent",
        fontFamily: "Inter, sans-serif",
        fontSize: ".9375rem",
        color: "#212529",
        boxSizing: "border-box",
        padding: "100px 0",
        position: "relative",
        height: "670px",
        marginBottom: "60px"
    };

    const overlayStyle = {
        opacity: 0.3,
    };


    return (
        <>
            <section className="section" style={sectionStyle}>
                <div className="bg-overlay bg-overlay-dark" style={overlayStyle}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5" >
                            <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden" style={{ borderRadius: "20px" }} >
                                <BiBriefcaseAlt2 fontSize={80} color='blue' />
                                <div className="ms-3">
                                    <h5 className="titles" style={{
                                        boxSizing: "border-box",
                                        marginTop: "0",
                                        marginBottom: ".5rem",
                                        fontSize: "1.125rem",
                                        fontFamily: "var(--bs-font-sans-serif)",
                                        lineHeight: "1.5!important",
                                        fontWeight: "600!important",
                                        transition: "all .5s ease",
                                    }} >Our Mission</h5>
                                    <p className="text-muted para mb-0">
                                        The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th
                                        century.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-7 mt-4 col-md-7 offset-md-5" >
                            <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden" style={{ borderRadius: "20px" }} >
                                <FiAirplay fontSize={80} color='blue' />
                                <div className="ms-3">
                                    <h5 className="titles" style={{
                                        boxSizing: "border-box",
                                        marginTop: "0",
                                        marginBottom: ".5rem",
                                        fontSize: "1.125rem",
                                        fontFamily: "var(--bs-font-sans-serif)",
                                        lineHeight: "1.5!important",
                                        fontWeight: "600!important",
                                        transition: "all .5s ease",
                                    }} >Our Mission</h5>
                                    <p className="text-muted para mb-0">
                                        The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th
                                        century.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-7 mt-4 col-md-7 offset-md-5" >
                            <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden" style={{ borderRadius: "20px" }} >
                                <MdFlip fontSize={80} color='blue' />
                                <div className="ms-3">
                                    <h5 className="titles" style={{
                                        boxSizing: "border-box",
                                        marginTop: "0",
                                        marginBottom: ".5rem",
                                        fontSize: "1.125rem",
                                        fontFamily: "var(--bs-font-sans-serif)",
                                        lineHeight: "1.5!important",
                                        fontWeight: "600!important",
                                        transition: "all .5s ease",
                                    }} >Our Mission</h5>
                                    <p className="text-muted para mb-0">
                                        The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th
                                        century.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section ' >
                <div className="container" >
                    <div className="row justify-content-center" >
                        <div className="col-12" style={{ width: "60%" }}>
                            <div className="section-title text-center mb-4 pb-2">
                                <span className="badge rounded-pill bg-soft-primary" style={{
                                    backgroundColor: 'rgba(57, 108, 240, 0.1)',
                                    border: '1px solid rgba(57, 108, 240, 0.1)',
                                    color: '#396cf0',
                                    display: 'inline-block',
                                    letterSpacing: '0.5px',
                                    padding: '4px 8px',
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    textAlign: 'center',
                                    cursor: "pointer"
                                }}>Find Doctors</span>
                                <h4 className="title mt-3 mb-4">Find Your Specialists</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Calvin Carlo</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>Eye Care</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/02.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Cristino Murphy</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>M.B.B.S, Gynecologist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/03.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Alia Reddy</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>
                                    M.B.B.S, Psychotherapist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/04.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Toni Kovar</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>
                                    M.B.B.S, Orthopedic</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/05.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Jessica McFarlane</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>M.B.B.S, Dentist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/06.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Elsie Sherman</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>M.B.B.S, Gastrologist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/07.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Bertha Magers</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>
                                    M.B.B.S, Urologist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-0" >
                            <div className="card team border-0 rounded shadow overflow-hidden  "  >
                                <div className="d-flex flex-row word-wrap overflow-hidden position-relative team-person mt-0 fs-5 d-block mb-0 text-dark max-width-100">
                                    <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/08.jpg" className="img-fluid" alt="" />
                                    <ul className="list-unstyled team-like">
                                        <li>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-danger"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body " style={{height
                                :"220px"}} >
                                    <a href="doctor-team-two.html" className="mt-0 fs-5 d-block mb-0 text-dark fw-bold title text-dark h5 d-block mb-0   text-wrap text-decoration-none mt-0 fs-5 d-block mb-0 text-dark fw-sans-serif lh-lg fw-600">Louis Batey</a>
                                    <small className="text-muted speciality word-wrap box-sizing-border font-size-sm text-muted" style={{ color: "#8492a6!important" }}>M.B.B.S, Neurologist</small>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul >
                                        <ReactStars className='position-absolute ml-5'
                                            count={5}
                                            size={24}
                                            color1='gold'
                                            color2={'blue'} />
                                    </div>
                                    <ul className="list-unstyled mt-2 mb-0">
                                        <li className="d-flex align-items-center">
                                            <ImLocation color='blue' size={15} />
                                            <small className="text-muted ms-2 " style={{ fontSize: "1rem" }}>63, PG Shustoke, UK</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BsClock color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>Mon: 2:00PM - 6:00PM</small>
                                        </li>
                                        <li className="d-flex align-items-center mt-2">
                                            <BiDollarCircle color='blue' size={15} />
                                            <small className="text-muted ms-2" style={{ fontSize: "1rem" }}>$ 75 USD / Visit</small>
                                        </li>
                                    </ul>
                                   
                                   
                                    <ul className="list-unstyled mt-2 mb-0 text-danger box-sizing"  style={{ wordWrap: 'break-word', paddingLeft: 0, marginTop: '.5rem', marginBottom: '0!important' }}>
                                        <li className="list-inline-item d-inline-block mr-0 mb-5" style={{ borderRadius:"50%", background:"#ebf0fd"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiFacebook color='#396cf0' />
                                            </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5">
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary" style={{background:"#ebf0fd",borderRadius:"50%"}}><FiLinkedin color='#396cf0' /></a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                               <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                <FiGithub color='#396cf0' />
                               </a>
                                        </li>
                                        <li className="mt-2 list-inline-item d-inline-block mr-0 mb-5" style={{background:"#ebf0fd",borderRadius:"50%"}}>
                                            <a href="" className="btn btn-icon btn-pills btn-soft-primary">
                                                <FiTwitter color='#396cf0' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section">
      <div className="container mt-5">
      <div className="row align-items-center">
      <div className="col-md-6 col-12">
        <div className="me-lg-5">
          <img src="https://shreethemes.in/doctris/layouts/assets/images/svg/vaccine-development-amico.svg" className="img-fluid" alt="" />
        </div>
      </div>
      
      <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      
How does it work ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      

Do I need a designer to use Doctris ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      

What do I need to do to start selling ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      


What happens when I receive an order ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

</div>

 
   

      
      </div>
    </div>
    </div>
                                    

    </section>

    <section className='section mb-5'>
        <div className='container'>
    <div className="row mt-4 pt-2 justify-content-center">
      <div className="col-sm-7 text-center">
        <div className="section-title">
          <h4 className="title mb-4">Have Question ? Get in touch!</h4>
          <p className="text-muted para-desc mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
          <a href="contact.html" className="btn btn-primary mt-4"><i className="mdi mdi-phone"></i> Contact us</a>
        </div>
      </div>
    </div>
    </div>
    </section>

        </>
    )
}

export default HomeSecond