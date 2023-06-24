import React, { useEffect, useState } from 'react'
import DrsSidebar from '../Components/Drdashboard/DrsSidebar'
import { AiFillCheckCircle, AiFillEye, AiOutlineCloseCircle } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import AppointmentPopup from './appointmentPopup'
import axios from 'axios';
import { appointmentdata, appointmentsarr } from '../ReduxTookit/Slice/AppointmentSlice'
import { useDispatch,useSelector } from 'react-redux'
import { doctorarr,doctorsdata } from '../ReduxTookit/Slice/DoctorSlice'
const Appointment = () => {
const dispatch= useDispatch();
const data= useSelector(appointmentsarr);
// const drdata= useSelector(doctorarr);
const [appointments, setappointments]= useState(data);
useEffect(()=>{
  dispatch(appointmentdata());
  setappointments(data)

},[])
useEffect(()=>{
  setappointments(data);
},[data]);
console.log(data);
console.log(doctorData);


  return (
    <>
      <AppointmentPopup data={"#exampleModal"}  />
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-3 col-lg-4 col-md-5 col-12 ">
              <DrsSidebar />
            </div>

            <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="row">
                <div className="col-xl-9 col-lg-6 col-md-4">
                  <h5 className="mb-0">Appointment</h5>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                  <div className="justify-content-md-end">
                    <form>
                      <div className="row justify-content-between align-items-center">
                        <div className="col-sm-12 col-md-5">
                          <div className="mb-0 position-relative">
                            <select className="form-select form-control">
                              <option value="EY">Today</option>
                              <option value="GY">Tomorrow</option>
                              <option value="PS">Yesterday</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                        
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
       Appointment
      </button>

    
                        
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="table-responsive bg-white shadow rounded">
                    <table className="table mb-0 table-center">
                      <thead>
                        <tr>
                          <th className="border-bottom p-3" style={{ minWidth: '50px' }}>#</th>
                          <th className="border-bottom p-3" style={{ minWidth: '180px' }}>Name</th>
                          <th className="border-bottom p-3">Age</th>
                          <th className="border-bottom p-3">Gender</th>
                          <th className="border-bottom p-3">Department</th>
                          <th className="border-bottom p-3" style={{ minWidth: '150px' }}>Date</th>
                          <th className="border-bottom p-3">Time</th>
                          <th className="border-bottom p-3" style={{ minWidth: '220px' }}>Doctor</th>
                          <th className="border-bottom p-3">Fees</th>
                          <th className="border-bottom p-3" style={{ minWidth: '150px' }}></th>
                        </tr>
                      </thead>

                        

                      <tbody>
          {appointments.map((value,index)=>{
          return(
                        <tr >
                            
                          <th className="p-3">{index+1}</th>
                          <td className="p-3">
                            <a href="#" className="text-dark">
                              <div className="d-flex align-items-center">
                                <img src="../assets/images/client/01.jpg" className="avatar avatar-md-sm rounded-circle shadow" alt="" />
                                <span className="ms-2">{value.patient}</span>
                              </div>
                            </a>
                          </td>
                          <td className="p-3">25</td>
                          <td className="p-3">Male</td>
                          <td className="p-3">{value.department}</td>
                          <td className="p-3">20th Dec 2020</td>
                          <td className="p-3">11:00AM</td>
                          <td className="p-3" style={{
                            boxSizing: 'border-box',
                            borderColor: 'inherit',
                            borderStyle: 'solid',
                            borderWidth: 0,
                            padding: '1rem',
                            backgroundColor: 'var(--bs-table-bg)',
                            borderBottomWidth: '1px',
                            verticalAlign: 'middle'
                          }}>
                            <a href="#" className="text-dark" style={{
                              boxSizing: 'border-box',
                              textDecoration: 'none',
                              '--bs-text-opacity': 1,
                              color: '#212529'
                            }}>
                              <div className="d-flex align-items-center">
                                <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" className="avatar avatar-md-sm rounded-circle border shadow" alt="" style={{
                                  color: '#212529',

                                  verticalAlign: 'middle',
                                  borderRadius: '50%',
                                  boxShadow: '0 0 3px rgba(60,72,88,.15)',
                                  border: '1px solid #e9ecef',
                                  height: '45px',
                                  width: '45px'
                                }} />
                                <span className="ms-2">Dr. Calvin Carlo</span>
                              </div>
                            </a>
                          </td>
                          <td className="p-3">$50/Patient</td>
                          <td className="text-end p-3    ">
                            <a href="#" className="btn btn-icon btn-pills ml-1 btn-soft-primary" data-bs-toggle="modal" style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              cursor: 'pointer',
                              userSelect: 'none',
                              backgroundColor: 'rgba(57, 108, 240, 0.1)',
                              border: '1px solid rgba(57, 108, 240, 0.1)',
                              color: '#396cf0',
                              boxShadow: '0 3px 5px 0 rgba(57, 108, 240, 0.3)',
                              outline: 0,
                              fontSize: '15px',
                              letterSpacing: '0.5px',
                              transition: 'all 0.3s',
                              borderRadius: '30px',
                              height: '36px',
                              width: '36px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 0,
                            }} data-bs-target="#viewappointment">
                              <AiFillEye />
                            </a>
                            <a href="#" className="btn btn-icon btn-pills btn-soft-success " data-bs-toggle="modal" data-bs-target="#acceptappointment" style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              cursor: 'pointer',
                              userSelect: 'none',
                              backgroundColor: 'rgba(83, 199, 151, 0.1)',
                              border: '1px solid rgba(83, 199, 151, 0.1)',
                              color: '#53c797',
                              boxShadow: '0 3px 5px 0 rgba(83, 199, 151, 0.3)',
                              outline: 0,
                              fontSize: '15px',
                              marginLeft: "5px",
                              letterSpacing: '0.5px',
                              transition: 'all 0.3s',
                              borderRadius: '30px',
                              height: '36px',
                              width: '36px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 0,
                            }}>
                              <AiFillCheckCircle />
                            </a>
                            <a href="#" className="btn btn-icon btn-pills btn-soft-danger" data-bs-toggle="modal" data-bs-target="#cancelappointment" style={{
                              textAlign: 'center',
                              verticalAlign: 'middle',
                              cursor: 'pointer',
                              userSelect: 'none',
                              backgroundColor: 'rgba(240, 115, 90, 0.1)',
                              border: '1px solid rgba(240, 115, 90, 0.1)',
                              color: '#f0735a',
                              boxShadow: '0 3px 5px 0 rgba(240, 115, 90, 0.3)',
                              outline: 0,
                              fontSize: '15px',
                              marginLeft: "5px",
                              letterSpacing: '0.5px',
                              transition: 'all 0.3s',
                              borderRadius: '30px',
                              height: '36px',
                              width: '36px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 0,
                            }}>
                              <AiOutlineCloseCircle />
                            </a>
                          </td>
                        </tr>)
                    })}
                      </tbody>
                    </table>
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

export default Appointment