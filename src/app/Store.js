import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/UserSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
});