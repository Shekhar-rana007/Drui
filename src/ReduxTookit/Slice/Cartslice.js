import { createSlice } from "@reduxjs/toolkit";
import { shopProducts } from "../../Allproducts";
const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    products: shopProducts
}

const cartSlice = createSlice({
    name: "cartinfo",
    initialState,
    reducers: {
        addProducts(state, action) {
            const checkResult = state.cart.find((product) => product.id === action.payload.id)
            if (checkResult) {
                checkResult.quantity = checkResult.quantity + 1
            } else {
                state.cart.push(action.payload);
            }

        },
        removeAddedProducts(state, action) {
            console.log("dhmkjsksfs")
         state.cart= state.cart.map((item)=>{
            if(item.id === action.payload){
                return {...item, quantity: item.quantity-1};
            }
            
                return item;
            
         })

        },
        // increaseProductquantity(state,action){

        // },
        // decreaseProductquantity(state,action){

        // }
    }
})

export const { addProducts, removeAddedProducts } = cartSlice.actions
export const cartslice = cartSlice.reducer


