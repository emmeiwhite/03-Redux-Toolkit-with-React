import { configureStore } from '@reduxjs/toolkit'
import { pizzaReducer } from '../features/pizza/pizzaSlice'

const store = configureStore({
  reducer: {
    pizza: pizzaReducer
  }
})

export default store
