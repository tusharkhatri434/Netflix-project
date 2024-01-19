import { createSlice } from "@reduxjs/toolkit";

const muteSlice = createSlice({
    name:"muteTrailer",
    initialState:false,
    reducers : {
        toogleTrailerMute : (state,action)=>{
            return !state;
        }
    }
     
});
export const {toogleTrailerMute} = muteSlice.actions;
export default muteSlice.reducer;