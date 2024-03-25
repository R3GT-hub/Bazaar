import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Update quantity of existing item
      } else {
        state.productData.push(action.payload); // Add new item to productData
      }
    },
  },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;
