import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "Willi Nardo",
            country: "Indonesia",
            username: "user",
            email: "willi@gmail.com",
            password: "12345",
            loggedIn: true,
        },
    },
    reducers: {
        setname: (state, action) => {
            state.user.name = action.payload;
        },
        setEmail: (state, action) => {
            state.user.email = action.payload;
        },
        LogIn: (state, action) => {
            state.user.loggedIn = action.payload;
        },

    },
});

export const {
    setname,
    setEmail,
    LogIn,
} = user.actions;

export default user.reducer;
