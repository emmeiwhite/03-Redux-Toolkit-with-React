import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  burgerCount: 110
}
const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    orderBurger: state => {
      state.burgerCount--
    },
    resetBurger: state => {
      state.burgerCount = 0
    }
  }
})

// export burgerReducer and action creators
export const burgerReducer = burgerSlice.reducer
export const { orderBurger, resetBurger } = burgerSlice.actions
