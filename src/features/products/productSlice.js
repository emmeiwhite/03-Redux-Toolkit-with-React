import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Step-1: Define the Async Thunk | Remember that createAsyncThunk automatically generates 3 action types - pending, fulfilled and rejected
const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
  return axios.get('https://fakestoreapi.com/products').then(res => res.data)
})

// Step-2: Handle the Thunk in the slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        ;(state.loading = false), (state.error = action.error.message)
      })
  }
})

export default productSlice.reducer
export { fetchProducts } // here since actions are internally created, we export fetchProducts in this case , the asyncThunk
