import { configureStore } from "@reduxjs/toolkit";
import login from "./auth";

export default configureStore({
    reducer: login
});