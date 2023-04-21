const { createSlice } = require("@reduxjs/toolkit");

const initialUi={cartIsVisible:false,notification:null}

const ui=createSlice({
    name:'UI',
    initialState:initialUi,
    reducers:{
        toggle(state){
            state.cartIsVisible=!state.cartIsVisible;
        },
        showNotification(state,action){
            state.notification={
                staus:action.payload.staus,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})

export const uiActions=ui.actions;
export default ui;