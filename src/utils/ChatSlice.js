import { createSlice } from "@reduxjs/toolkit";
import { LiveChatCount } from "./Constants";

const ChatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // if(state.messages.length>)
            state.messages.splice(LiveChatCount,1);
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage}= ChatSlice.actions;
export default ChatSlice.reducer;