import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: ''
}
const productSlice = createSlice({
  name: 'product',
  initialState
})

// Step-1: Define the Async Thunk

const createAsyncThunk = createAsyncThunk()
