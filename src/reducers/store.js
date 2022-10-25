import { configureStore } from "@reduxjs/toolkit";
import login from "./auth";
import vehicles from './vehicle'
import reviews from './review'


export const rootReducer = {
    login, vehicles, reviews
}
export default configureStore({
    reducer: rootReducer


});

