import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pizzaCount: 60
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    orderPizza: state => {
      state.pizzaCount--
    },
    resetPizza: state => {
      state.pizzaCount = 0
    }
  }
})

console.log(pizzaSlice)
// Export action creators and reducer
export const pizzaReducer = pizzaSlice.reducer
export const { orderPizza, resetPizza } = pizzaSlice.actions
