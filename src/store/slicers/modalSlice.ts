import {createSlice} from "@reduxjs/toolkit";

import {ModalInitialState } from "../../types/types";



const initialState:ModalInitialState={
    mainToggle:false,
    vacanciesToggle:false,
    toggle:false
}
const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        handleToggleMain(state) {
            state.mainToggle = !state.mainToggle
        },
        handleToggleVacancies(state){
            state.vacanciesToggle=!state.vacanciesToggle
        },
        handleToggle(state){
            state.toggle=!state.toggle
        },
    },
    extraReducers:() => {}
})
export const {handleToggleMain,handleToggleVacancies,handleToggle} = modalSlice.actions
export default modalSlice.reducer