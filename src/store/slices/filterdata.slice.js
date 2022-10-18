import { createSlice } from "@reduxjs/toolkit";

const filterDataSlice = createSlice({
    name:'filterData',
    initialState:{},
    reducers:{
        setFilterDataGlobal:(state,action)=>action.payload
    }
})

export const {setFilterDataGlobal} = filterDataSlice.actions
export default filterDataSlice.reducer
