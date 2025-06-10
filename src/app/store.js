import { configureStore } from '@reduxjs/toolkit'
import { pizzaReducer } from '../features/pizza/pizzaSlice'
import { burgerReducer } from '../features/burger/burgerSlice'
import productsReducer from '../features/products/productSlice'

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productsReducer
  }
})

export default store
