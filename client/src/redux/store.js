import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartItems'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default store