import { configureStore } from "@reduxjs/toolkit";
import login from "./auth";
import vehicles from './vehicle'


export const rootReducer = {
    login, vehicles
}
export default configureStore({
    reducer: rootReducer


});

