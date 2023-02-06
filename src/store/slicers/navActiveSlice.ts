import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NavActiveInitialState } from "../../types/types";





const initialState:NavActiveInitialState={
    aboutUsStatus: "",
    servicesStatus:"",
    teamStatus:"",
    projectStatus:"",
    partnersStatus:"",
    vacanciesStatus:"",
    ribbonStatus:"",
    charityStatus:""
}
const navActiveSlice = createSlice({
    name:'navActive',
    initialState,
    reducers:{
        changeAboutUsStatus(state,action:PayloadAction<"О нас" | "">){
            state.aboutUsStatus=action.payload
        },
        changeServicesStatus(state,action:PayloadAction<"Услуги" | "">){
            state.servicesStatus=action.payload
        },
        changeTeamStatus(state,action:PayloadAction<"Наша команда" | "">){
            state.teamStatus=action.payload
        },
        changeProjectStatus(state,action:PayloadAction<"Портфолио проектов" | "">){
            state.projectStatus=action.payload
        },
        changePartnersStatus(state,action:PayloadAction<"Партнеры и клиенты" | "">){
            state.partnersStatus=action.payload
        },
        changeVacanciesStatus(state,action:PayloadAction<"Вакансии" | "">){
            state.vacanciesStatus=action.payload
        },
        changeRibbonStatus(state,action:PayloadAction<"Лента событий" | "">){
            state.ribbonStatus=action.payload
        },
        changeCharityStatus(state,action:PayloadAction<"Благотворительность" | "">){
            state.charityStatus=action.payload
        },
    },
    extraReducers:() => {}
})
export const {changeAboutUsStatus,changeServicesStatus,changeTeamStatus,changeProjectStatus,changePartnersStatus,changeVacanciesStatus,changeRibbonStatus,changeCharityStatus} = navActiveSlice.actions
export default navActiveSlice.reducer