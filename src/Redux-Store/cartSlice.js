import { createSlice } from "@reduxjs/toolkit";

const initialCart={items:[],totalQuantity:0}
const cartSlice=createSlice({
    name:'cart',
    initialState:initialCart,
    reducers:{
        addItem(state,action){
            const newitem=action.payload;
            const existingItem=state.items.find(item=>item.id===newitem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newitem.id,price:newitem.price,quantity:1,totalPrice:newitem.price,name:newitem.title
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newitem.price
            }
        },
        removeItem(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id===id);
            state.totalQuantity--;
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id!==id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
            }
        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice;