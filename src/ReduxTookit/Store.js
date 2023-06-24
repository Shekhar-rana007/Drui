import { configureStore } from "@reduxjs/toolkit";
import { userslice } from "./Slice/Userdata";
import { cartslice} from "./Slice/Cartslice";
import { usersSlice } from "./Slice/usersSlice";
import { appointmentSlice } from "./Slice/AppointmentSlice";
import { doctorslice } from "./Slice/DoctorSlice";
const store = configureStore({
    reducer: {
        userInfo: userslice,
        cartInfo: cartslice,
        users: usersSlice,
        appointmentdata:appointmentSlice,
        doctorsdata:doctorslice,
    }

})

export default store