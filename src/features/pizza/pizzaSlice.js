import { createSlice } from '@reduxjs/toolkit'
import { globalReset } from '../global/globalSlice'

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
    reStockPizza: (state, action) => {
      state.pizzaCount += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(globalReset, state => {
      state.pizzaCount = 0
    })
  }
})

// console.log(pizzaSlice)
// Export action creators and reducer
export const pizzaReducer = pizzaSlice.reducer
export const { orderPizza, resetPizza, reStockPizza } = pizzaSlice.actions
