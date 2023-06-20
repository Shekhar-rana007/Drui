import {  createSlice } from "@reduxjs/toolkit";

const  userSlice= createSlice({
    name:"users",
    initialState:{
        users:null
    },
    reducers:{
        getUsers:(state,action)=>{
            state.users= action.payload
        }
    }
});

export const {getUsers}= userSlice.actions
export const usersSlice = userSlice.reducer
