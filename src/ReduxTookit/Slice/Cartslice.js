import { createSlice } from "@reduxjs/toolkit";
import { shopProducts } from "../../Allproducts";
const initialState = {
    cart: [ ],
    totalQuantity: 0,
    totalPrice: 0,
    products: shopProducts
}

const cartSlice = createSlice({
    name: "cartinfo",
    initialState,
    reducers: {
        addProducts(state, action) {
            const checkResult=state.cart.find((product)=>product===action.payload.id)
            if(checkResult){
                  checkResult.quantity= checkResult.quantity+1
            }else{
                state.cart.push(action.payload);
            }
            
        },



        // removeProducts(state,action){

        // },
        // increaseProductquantity(state,action){

        // },
        // decreaseProductquantity(state,action){

        // }
    }
})

export const { addProducts } = cartSlice.actions
export const cartslice = cartSlice.reducer


// const checkproduct= state.cart.find(product=>product.id===action.payload.id)            
// if(checkproduct){
//   checkproduct.quantity=checkproduct.quantity+1     
// } else{
//     state.cart.push(action.payload);   
// }   