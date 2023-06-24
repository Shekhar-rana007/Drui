import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const appointmentdata= createAsyncThunk("appointmentsInfo", async (arg,{rejectWithValue})=>{
       try {
        const response = await axios.get("http://localhost:8100/drapp/user/gettingappointments");
        return response.data.allAppointments;
       } catch (error) {
        console.log(error);
       }
})


 
const appointmentslice = createSlice({
    name: "appointmentsInfo",
    initialState : {
        appointments:[],
        loading:false,
        error:null
    },
        extraReducers:{
            [appointmentdata.pending]:(state)=>{
                    state.loading=true;
            },
            [appointmentdata.fulfilled]:(state,action)=>{
                state.loading=false;
                state.appointments= action.payload;
        },
        [appointmentdata.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload;
    }
        }
})

export const appointmentSlice= appointmentslice.reducer
export const appointmentsarr= state=>state.appointmentdata.appointments
