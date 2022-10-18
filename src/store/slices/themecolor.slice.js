import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const themeColorSlice = createSlice({
    name:'themeColor',
    initialState: (JSON.parse(window.localStorage.getItem('theme'))),
    reducers:{
        setThemeColorGlobal:(state,action)=>action.payload
    }
})

export const {setThemeColorGlobal} = themeColorSlice.actions
export default themeColorSlice.reducer
