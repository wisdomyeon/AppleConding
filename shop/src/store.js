import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: 'choi'
})

let inventory = createSlice({
  name: "inventory",
  initialState: [10, 20, 30]
})

export default configureStore({
  reducer: {
    user: user.reducer,
    inventory: inventory.reducer
  }
}) 