import { configureStore } from "@reduxjs/toolkit";
import ui from "./uiSilce";

const store=configureStore({
    reducer:{
        UI:ui.reducer,
    }
})

export default store;