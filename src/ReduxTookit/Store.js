import { configureStore } from "@reduxjs/toolkit";
import { userslice } from "./Slice/Userdata";
const store = configureStore({
    reducer: {
        userinfo: userslice
    }

})

export default store