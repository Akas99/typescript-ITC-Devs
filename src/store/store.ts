import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "./slicers/mainSlice";
import modalSlice from './slicers/modalSlice'
import navActiveSlice from './slicers/navActiveSlice'

const store=configureStore({
    reducer:{
        main:mainSlice,
        modal:modalSlice,
        navActive:navActiveSlice
    }
})
export default store

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch