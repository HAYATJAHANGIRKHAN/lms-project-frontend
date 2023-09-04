import { configureStore } from "@reduxjs/toolkit";
import AuthSlicesReducer from "./Slices/AuthSlices";

const Store = configureStore({
reducer:{
    auth: AuthSlicesReducer
},
devtools:true
})

export default Store;