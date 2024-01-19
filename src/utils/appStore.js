import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import muteSlice from "./muteSlice";
const store = configureStore({
  reducer: {
    user:userSlice,
    movies:movieSlice,
    mute:muteSlice 
  },
});

export default store;