import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  burgerCount: 107
}
const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    orderBurger: state => {
      state.burgerCount--
    }
  }
})

export const { reducer } = burgerSlice
export const { orderBurger } = burgerSlice.actions
