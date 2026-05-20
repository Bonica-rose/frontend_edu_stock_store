import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import settingsReducer from "../features/settings/settingsSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        settings: settingsReducer,
        users: userReducer,
        
    },
});