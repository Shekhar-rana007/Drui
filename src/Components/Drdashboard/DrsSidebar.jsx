import React from 'react'
import { FiAirplay } from 'react-icons/fi'
import { BsFillCalendarCheckFill, BsFillEnvelopeFill, BsFillStopwatchFill, BsFillChatDotsFill } from "react-icons/bs"
import { AiOutlineUser, AiOutlineLogin } from "react-icons/ai"
import { RiUserSettingsLine, RiDeviceRecoverFill } from "react-icons/ri"
import { MdPreview } from "react-icons/md"
import { CgUserlane } from "react-icons/cg"
import { TbFileInvoice } from "react-icons/tb"
import { NavLink } from 'react-router-dom'

const DrsSidebar = () => {
    return (
        <div className="rounded shadow overflow-hidden ">
            <div className="card border-0  ">
                <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/profile-bg.jpg" className="img-fluid" alt="" />
            </div>

            <div className="text-center avatar-profile position-relative pb-4 border-bottom">
                <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" className="rounded-circle shadow-md avatar position-absolute avatar-md-md" alt="" style={{ width: "80px", height: "80px", top: "-85px", left: "110px" }} />
                <h5 className="mt-5 mb-1">Dr. Calvin Carlo</h5>
                <p className="text-muted mb-0">Orthopedic</p>
            </div>

            <ul className="list-unstyled sidebar-nav mb-3 d-flex justify-content-center flex-column  ms-5 p-3 ">
                <li className="navbar-item active  "><a href="doctor-dashboard.html  "
                    style={{ fontSize: "15px", marginBottom: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder ">
                    <FiAirplay size={20} style={{ marginRight: "15px" }} /> Dashboard</a></li>
                <li className="navbar-item active"><NavLink to="/appointment"
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <BsFillCalendarCheckFill size={20} style={{ marginRight: "15px" }} />
                    Appointment</NavLink></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <BsFillStopwatchFill size={20} style={{ marginRight: "15px" }} />     Schedule Timing</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <TbFileInvoice size={20} style={{ marginRight: "15px" }} />     Invoices</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <BsFillEnvelopeFill size={20} style={{ marginRight: "15px" }} /> Messages</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <AiOutlineUser size={20} style={{ marginRight: "15px" }} /> Profile</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <RiUserSettingsLine size={20} style={{ marginRight: "15px" }} /> Profile Settings</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <CgUserlane size={20} style={{ marginRight: "15px" }} /> Patients</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <MdPreview size={20} style={{ marginRight: "15px" }} /> Patients Review</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <BsFillChatDotsFill style={{ marginRight: "15px" }} size={20} /> Chat</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bolder">
                    <AiOutlineLogin style={{ marginRight: "15px" }} size={20} /> Login</a></li>
                <li className="navbar-item active"><a href="doctor-dashboard.html "
                    style={{ fontSize: "15px", textDecoration: "none", listStyle: "none", color: "black" }} className="navbar-link fw-bold">
                    <RiDeviceRecoverFill style={{ marginRight: "15px" }} size={20} /> Forgot Password</a></li>
            </ul>
        </div>
    )
}

export default DrsSidebar