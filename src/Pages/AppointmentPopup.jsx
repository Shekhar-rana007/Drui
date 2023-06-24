import React, { useState } from 'react'
import axios from 'axios';
const AppointmentPopup = () => {

    const appointmentdetails={
        patient:"",
        department:"",
        message:"",
        time:"",
        date:"",
        phone:"",
        email:"",
        doctor:""
    }
const [formdata,setformdata]=useState(appointmentdetails);

const handleModal = async(e) => {
   e.preventDefault();
   console.log(formdata.patient);
   try {
    const appointmentDetails= await axios.post("http://localhost:8100/drapp/user/appointmentDetails",formdata);
    // console.log(appointmentDetails)
   } catch (error) {
    console.log(error)
   }
        
    }
    return (
        <div className="modal fade m-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" >
                <div className="modal-content" >
                    <div className="modal-header"    >
                        <h1 className="modal-title fs-5" id="exampleModalLabel"> Book an Appointment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                        <input name="name" id="name" onChange={(e)=> setformdata({...formdata,patient:e.target.value})} type="text" className="form-control" placeholder="Patient Name :"  />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Departments</label>
                                        <select className="form-select form-control"onChange={(e)=> setformdata({...formdata,department:e.target.value})}>
                                            <option >Eye Care</option>
                                            <option >Gynecologist</option>
                                            <option >Psychotherapist</option>
                                            <option >Orthopedic</option>
                                            <option >Dentist</option>
                                            <option >Gastrologist</option>
                                            <option >Urologist</option>
                                            <option >Neurologist</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Doctor</label>
                                        <select className="form-select form-control"onChange={(e)=> setformdata({...formdata,doctor:e.target.value})}>
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
                                        <input name="email" id="email" type="email"onChange={(e)=> setformdata({...formdata,email:e.target.value})}  placeholder="Your email :" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" onChange={(e)=>setformdata({...formdata,phone:e.target.value})}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3" style={{ position: 'relative' }}>
                                        <label className="form-label">Date :</label>
                                        <input name="date" type="date" className="form-control start" placeholder="Select date :" onChange={(e)=>setformdata({...formdata,date:e.target.value})} />
                                        <div className="qs-datepicker-container qs-hidden">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="input-time">Time :</label>
                                        <input name="time" type="time" className="form-control timepicker" id="input-time" placeholder="03:30 PM" onChange={(e)=>setformdata({...formdata, time:e.target.value})} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :" onChange={(e)=>setformdata({...formdata,message:e.target.value})}></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" onClick={(e)=>handleModal(e)}>Book An Appointment</button>
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