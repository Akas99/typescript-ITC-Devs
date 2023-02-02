import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "./slicers/mainSlice";

const store=configureStore({
    reducer:{
        main:mainSlice
    }
})
export default store

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch