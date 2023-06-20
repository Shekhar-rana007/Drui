import React, { useState } from 'react'

const AppointmentPopup = ({ data }) => {
    const [setshowmodal, setSetshowmodal] = useState(data)
    const handleModal = () => {
        setSetshowmodal(false)
    }
    return (
        <div class="modal fade"   id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" >
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
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Departments</label>
                                        <select className="form-select form-control">
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
                                        <select className="form-select form-control">
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
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3" style={{ position: 'relative' }}>
                                        <label className="form-label">Date :</label>
                                        <input name="date" type="text" className="form-control start" placeholder="Select date :" />
                                        <div className="qs-datepicker-container qs-hidden">
                                            <div className="qs-datepicker">
                                                <div className="qs-controls">
                                                    <div className="qs-arrow qs-left"></div>
                                                    <div className="qs-month-year">
                                                        <span className="qs-month">June</span>
                                                        <span className="qs-year">2023</span>
                                                    </div>
                                                    <div className="qs-arrow qs-right"></div>
                                                </div>
                                                <div className="qs-squares">
                                                    {/* Calendar days */}
                                                </div>
                                                <div className="qs-overlay qs-hidden">
                                                    <div>
                                                        <input className="qs-overlay-year" placeholder="4-digit year" inputMode="numeric" />
                                                        <div className="qs-close">✕</div>
                                                    </div>
                                                    <div className="qs-overlay-month-container">
                                                        {/* Calendar overlay months */}
                                                    </div>
                                                    <div className="qs-submit qs-disabled">Submit</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="input-time">Time :</label>
                                        <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
            )
}

            export default AppointmentPopup