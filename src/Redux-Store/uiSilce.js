const { createSlice } = require("@reduxjs/toolkit");

const initialUi={cartIsVisible:false}

const ui=createSlice({
    name:'UI',
    initialState:initialUi,
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        }
    }
})

export const uiActions=ui.actions;
export default ui;