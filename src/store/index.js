import {configureStore} from "@reduxjs/toolkit"
import userName from './slices/username.slice'
import themeColor from './slices/themecolor.slice'

export default configureStore({
    reducer:{
        userName , themeColor
    }})