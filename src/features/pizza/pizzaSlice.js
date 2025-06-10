import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzaCount: 30
}
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    orderPizza: state => {
      state.pizzaCount--
    }
  }
})

console.log(pizzaSlice)
// Export action creators and reducer
export const { orderPizza } = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer
