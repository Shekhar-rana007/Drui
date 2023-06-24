 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Doctordata= createAsyncThunk("doctorInfo",async()=>{
    const respond= await axios.get("http://localhost:8100/drapp/user/registeredDoctors");

    console.log(respond);
})


 const doctorSlice=({

    name:"docorInfo",
    initiaState:{
        doctors:[],
        loading:null,
        Error:null,
    },
    extraReducers:{
     [Doctordata.pending]:(state)=>{
        state.loading=true;
     },     
     [Doctordata.fulfilled]:(state,action)=>{
        state.doctors= action.payload;
     },
     [Doctordata.rejected]:(state,action)=>{
            state.Error= action.payload
     }

    }
 });

 export  const doctorslice= doctorSlice.reducer;
 export const doctorarr= state=>state.Doctordata.doctors