import { configureStore } from "@reduxjs/toolkit";
import { userslice } from "./Slice/Userdata";
import { cartslice} from "./Slice/Cartslice";
const store = configureStore({
    reducer: {
        userInfo: userslice,
        cartInfo: cartslice
    }

})

export default store