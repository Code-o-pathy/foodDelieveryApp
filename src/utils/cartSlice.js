import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // let state=["pizza","burger"]
      // console.log(state)--//it will return a proto objecct because redux wont let us see teh store directly.
      // console.log(current(state))--//it will return an array of objects in your state--[pizza, burger]
      // state=[] --//this empties the local state not the actual state.
      // console.log(current(state))--//[]--it will return empty state. but it wont reflect because all this has happened in current state not in acctual state, if u are using pizza and burger somewhere it wont go out unless u use below code.
      state.items.length = 0; //this will clear the state and return it

      //if u dont want to use above line\
      // --modify the current state and at the end return it, like if we want to empty the state at the end
      //   return { items: [] };
      //  --this will replace the original state, the changes would be reflected and pizza and burger (our example items in store) willl no longer be there as we emptied the store

      //or if u want to mutate the items in store llike except pizza u want add something else;
      // return {items:["rolls","burger"]}
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
