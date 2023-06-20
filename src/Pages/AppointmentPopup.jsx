import React, { useState } from 'react'

const AppointmentPopup = () => {
const [patient, setpatient]= useState("")
const [department, setdepartment]= useState("")
const [message, setmessage]= useState("")
const [time, settime]= useState("")
const [date, setdate]= useState("")
const [phone, setphone]= useState("")
const [email, setemail]= useState("")
const [doctor, setdoctor]= useState("")






console.log(date);

    const handleModal = () => {
        setSetshowmodal(false)
    }
    return (
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" >
                <div class="modal-content" >
                    <div class="modal-header"    >
                        <h1 class="modal-title fs-5" id="exampleModalLabel"> Book an Appointment</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                        <input name="name" id="name" onChange={(e)=> setpatient(e.target.value)} type="text" className="form-control" placeholder="Patient Name :"  />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Departments</label>
                                        <select className="form-select form-control" onChange={(e)=> setdepartment(e.target.value)}>
                                            <option value="EY">Eye Care</option>
                                            <option value="GY">Gynecologist</option>
                                            <option value="PS">Psychotherapist</option>
                                            <option value="OR">Orthopedic</option>
                                            <option value="DE">Dentist</option>
                                            <option value="GA">Gastrologist</option>
                                            <option value="UR">Urologist</option>
                                            <option value="NE">Neurologist</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Doctor</label>
                                        <select className="form-select form-control" onChange={(e)=>setdoctor(e.target.value)}>
                                            <option value="CA">Dr. Calvin Carlo</option>
                                            <option value="CR">Dr. Cristino Murphy</option>
                                            <option value="AL">Dr. Alia Reddy</option>
                                            <option value="TO">Dr. Toni Kovar</option>
                                            <option value="JE">Dr. Jessica McFarlane</option>
                                            <option value="EL">Dr. Elsie Sherman</option>
                                            <option value="BE">Dr. Bertha Magers</option>
                                            <option value="LO">Dr. Louis Batey</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" onChange={(e)=>setemail(e.target.value)}className="form-control" placeholder="Your email :" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" onChange={(e)=>setphone(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3" style={{ position: 'relative' }}>
                                        <label className="form-label">Date :</label>
                                        <input name="date" type="date" className="form-control start" placeholder="Select date :" onChange={(e)=>setdate(e.target.value)} />
                                        <div className="qs-datepicker-container qs-hidden">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="input-time">Time :</label>
                                        <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" onChange={(e)=>settime(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :" onChange={(e)=>setmessage(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppointmentPopup