import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: JSON.parse(localStorage.getItem('cart-items')) || [] 
  },
  reducers: {
    addToCart: (state,action) => {
      state.value.push(action.payload)
    },
    removeFromCart: (state,action) => {
      state.value.filter((item)=> item.id !== action.payload.id)
    },
    updateCart:(state,action) =>{
        state.value = action.payload
    }
  }
})

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions

export default cartSlice.reducer