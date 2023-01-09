import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "choi",
});

let inventory = createSlice({
  name: "inventory",
  initialState: [10, 20, 30],
});

let items = createSlice({
  name: "items",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusCount(state, action) {
      // console.log(action.payload.action);
      let item = state.find((v) => v.id === action.payload);
      item.count += 1;
    },
    //아이템 주문하기 버튼 누르면 새로운 상품 장바구니에 추가
    addItem(state, action) {
      console.log(action.payload)
      state.push(action.payload)
    }
  },
});
export let { plusCount, addItem } = items.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    inventory: inventory.reducer,
    items: items.reducer,
  },
});
