import { configureStore } from "@reduxjs/toolkit";
import ui from "./uiSilce";
import cartSlice from "./cartSlice";
const store=configureStore({
    reducer:{
        UI:ui.reducer,
        cart:cartSlice.reducer,
    }
})

export default store;