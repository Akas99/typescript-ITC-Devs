import {createSlice,PayloadAction,createAsyncThunk,AnyAction} from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "process";
import { AddEventRibbon,InitialState } from "../../types/types";

export const addEventRibbon=createAsyncThunk<AddEventRibbon[],undefined>(
    'main/addEventRibbon',
    async(_,{rejectWithValue})=>{
        // const config = {
        //     headers: {
        //         // 'Content-Type': 'application/json', // можно не писать , есть под коробкой
        //         // 'x-access-token':'sNkGz9A2cptBb6naIm5pI9SMMDhO2mowu11HjXWkN0u6hMsTOHecmIzfZvMwvrO6'
        //         // 'X-API-KEY':'здесь будет токен'
        //         'Access-Control-Allow-Origin' :"PUT"
        //     },

        // }
        try{
            const response = await axios.get('http://165.22.49.123:2000/api/projects/',)
            alert(';;')
            console.log(response)
            return response.data
        }catch(e:any){
            return rejectWithValue(e.message)
        }
    }
)

const initialState:InitialState={
    mainToggle:false,
    vacanciesToggle:false,
    toggle:false,
    list:[],
    loading:false,
    error:null
}
const mainSlice = createSlice({
    name:'main',
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
    extraReducers:(builder) => {
        builder
        .addCase(addEventRibbon.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(addEventRibbon.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false
        })
    }
})
export const {handleToggleMain,handleToggleVacancies,handleToggle,} = mainSlice.actions
export default mainSlice.reducer