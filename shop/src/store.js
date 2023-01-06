import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: 'choi'
})

let inventory = createSlice({
  name: "inventory",
  initialState: [10, 20, 30]
})

let items = createSlice({
  name: "items",
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    plusCount(state) {
      return state.count += 1;
    }
  }
})
export let { plusCount } = items.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    inventory: inventory.reducer,
    items: items.reducer
  }
}) 