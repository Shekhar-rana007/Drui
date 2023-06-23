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

            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            })
        },

        increaseProductquantity(state, action) {
            state.cart = state.cart.map((items) => {
                if (items.id === action.payload) {
                    return { ...items, quantity: items.quantity + 1 }
                } else {
                    return items;
                }
            })
        },
        decreaseProductquantity(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addProducts, removeAddedProducts, increaseProductquantity, decreaseProductquantity } = cartSlice.actions
export const cartslice = cartSlice.reducer


