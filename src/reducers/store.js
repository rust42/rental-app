import { configureStore } from "@reduxjs/toolkit";
import login from "./auth";
import vehicles from './vehicle'
import reviews from './review'
import bookings from './booking'


export const rootReducer = {
    login, vehicles, reviews, bookings
}
export default configureStore({
    reducer: rootReducer


});

