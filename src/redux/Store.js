import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import hotelReducer from "./Hotel"

export const store = configureStore({
    reducer: {
        user: userReducer,
        hotel: hotelReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
