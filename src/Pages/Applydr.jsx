import React, { useState } from 'react'

const Applydr = () => {
    const [firstname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [website, setwebsite] = useState("")
    const [phone, setphone] = useState("")
    console.log(phone)

    const submitdrDetails = () => {

    }
    return (
        <>
            <h1 className='text-center'>Apply doctor</h1>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-sm-4 p-3 d-grid " style={{ margin: "100px", gap: "10px" }}>
                            <input type='text' placeholder='Enter your firstname' onChange={(e) => setfname(e.target.value)} />
                            <input type='text' placeholder='Enter your lastname' required onChange={(e) => setlname(e.target.value)} />
                            <input type='text' placeholder='Enter your phone no' required onChange={(e) => setphone(e.target.value)} />
                            <input type='email' placeholder='Enter your email' required onChange={(e) => setemail(e.target.value)} />
                            <input type='text' placeholder='Enter your website' requiredonChange={(e) => setwebsite(e.target.value)} />
                            <input type='text' placeholder='Enter your address' required onChange={(e) => setaddress(e.target.value)} />
                            <input type='number' placeholder='Enter your fees' required onChange={(e) => setaddress(e.target.value)} />
                            <input type='text' placeholder='Enter your specializations' required onChange={(e) => setaddress(e.target.value)} />
                            <input type='text' placeholder='Enter your address' required onChange={(e) => setaddress(e.target.experience)} />
                            <input type='text' placeholder='Enter your timings' required onChange={(e) => setaddress(e.target.value)} />
                            <button onClick={submitdrDetails} >Submit</button>

                        </div>

                    </div>

                </div>
            </section>
            <form>





            </form>



        </>
    )
}

export default Applydr