import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { AddEventRibbon,MainInitialState } from "../../types/types";

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
            const response = await axios.get('http://165.22.49.123:/ad/' )
            alert(';;')
            console.log(response.data)
            return response.data
        }catch(e:any){
            return rejectWithValue(e.message)
        }
    }
)

const initialState:MainInitialState={
    list:[],
    loading:false,
    error:null
}
const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{},
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
export const {} = mainSlice.actions
export default mainSlice.reducer