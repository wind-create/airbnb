import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "Willi Nardo",
            username: "user",
            email: "user@gmail.com",
            password: "12345",
            loggedIn: false,
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
