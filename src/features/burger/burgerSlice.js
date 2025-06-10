import { createSlice } from '@reduxjs/toolkit'
import { globalReset } from '../global/globalSlice'

const initialState = {
  burgerCount: 110
}
const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    orderBurger: state => {
      if (state.burgerCount > 0) {
        state.burgerCount--
      }
    },
    reStockBurger: (state, action) => {
      state.burgerCount += action.payload
    }
    // resetBurger: state => {
    //   state.burgerCount = 0
    // }
  },
  extraReducers: builder => {
    builder.addCase(globalReset, state => {
      state.burgerCount = 0
    })
  }
})

// export burgerReducer and action creators
export const burgerReducer = burgerSlice.reducer
export const { orderBurger, reStockBurger } = burgerSlice.actions
