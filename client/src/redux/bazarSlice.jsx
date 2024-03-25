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
    deleteItem:(state,action)=>{
        state.productData=state.productData.filter(
            (item)=>item._id!==action.payload
        );
    },
    resetCart:(state)=>{
        state.productData=[];
    },
    increamentQuantity: (state, action) => {
        const item = state.productData.find(
        (item) => item._id=== action.payload._id
        );
        if (item) {
        item.quantity++;
        }
   },
   decrementQuantity : (state,action)=>{  
    const item = state.productData.find((item) => item._id === action.payload._id); 
    if(item.quantity >1){
       item.quantity--;     
    }else{      
        item.quantity=1;
     }
  },
  addUser:(state,action)=>{
    state.userInfo=action.payload
  },
  removeUser:(state)=>{
    state.userInfo=null;
  }

}
});


export const {addUser,removeUser, addToCart, deleteItem,resetCart,increamentQuantity,decrementQuantity } = bazarSlice.actions;
export default bazarSlice.reducer;
