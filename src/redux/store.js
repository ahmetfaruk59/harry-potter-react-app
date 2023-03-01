import { configureStore } from "@reduxjs/toolkit"
import appReducer from './slice.js'
const store=configureStore({
    reducer:{
        app:appReducer
    }
})
export default store