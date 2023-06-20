import { configureStore } from "@reduxjs/toolkit";
import { userslice } from "./Slice/Userdata";
import { cartslice} from "./Slice/Cartslice";
import { usersSlice } from "./Slice/usersSlice";
const store = configureStore({
    reducer: {
        userInfo: userslice,
        cartInfo: cartslice,
        users: usersSlice,
    }

})

export default store