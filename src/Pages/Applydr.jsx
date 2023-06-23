import React, { useState } from 'react'
import axios from 'axios'
const Applydr = () => {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [website, setwebsite] = useState("")
    const [phone, setphone] = useState("")
    const [fees, setfees] = useState("")
    const [specialization, setspecializations] = useState("")
    const [experience, setexperience] = useState("")
    const [open, settimingopen] = useState("")
    const [close, settimingclose] = useState("")



    const submitdrDetails = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:8100/drapp/user/applydoctors", { fname, lname, email, address, website, phone, specialization, experience, open, close,fees });
        } catch (error) {
            console.log(error);
        }
      
        setfees("");
        setaddress("");
        setemail("");
        setexperience("");
        setwebsite("")
        setfname("");
        setlname("");
        setphone("");
        setspecializations("");
        settimingclose("");
        settimingopen("");

    }
    return (
        <>
            <h1 className='text-center'>Apply doctor</h1>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-sm-4 p-3 d-grid " style={{ margin: "100px", gap: "10px" }}>
                            <input type='text' placeholder='Enter your firstname' value={fname} onChange={(e) => setfname(e.target.value)} />
                            <input type='text' value={lname} placeholder='Enter your lastname' required onChange={(e) => setlname(e.target.value)} />
                            <input type='text' value={phone} placeholder='Enter your phone no' required onChange={(e) => setphone(e.target.value)} />
                            <input type='email' value={email} placeholder='Enter your email' required onChange={(e) => setemail(e.target.value)} />
                            <input type='text' value={website} placeholder='Enter your website' required onChange={(e) => setwebsite(e.target.value)} />
                            <input type='text' value={address} placeholder='Enter your address' required onChange={(e) => setaddress(e.target.value)} />
                            <input type='number' value={fees} placeholder='Enter your fees' required onChange={(e) => setfees(e.target.value)} />
                            <input type='text' value={specialization} placeholder='Enter your specializations' required onChange={(e) => setspecializations(e.target.value)} />
                            <input type='text' value={experience} placeholder='Enter your experience' required onChange={(e) => setexperience(e.target.value)} />
                            <input type='text' value={open} placeholder='Enter your open timing' required onChange={(e) => settimingopen(e.target.value)} />
                            <input type='text' value={close} placeholder='Enter your close timing' required onChange={(e) => settimingclose(e.target.value)} />
                            <button onClick={(e)=>submitdrDetails(e)} >Submit</button>
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