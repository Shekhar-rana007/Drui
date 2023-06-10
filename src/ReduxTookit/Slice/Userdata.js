import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const userSlice = createSlice({
    name: "usersInfo",
    initialState,
    reducers: {
        adduser(state, action) {
            return state = state + action.payload
        },
        minusUser(state, action) {
               return state= state-action.payload 
        }
    }
})

export const { adduser,minusUser} = userSlice.actions
export const userslice = userSlice.reducer