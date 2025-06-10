import { configureStore } from '@reduxjs/toolkit'
import { pizzaReducer } from '../features/pizza/pizzaSlice'
import { burgerReducer } from '../features/burger/burgerSlice'

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer
  }
})

console.log(store.getState())
export default store
