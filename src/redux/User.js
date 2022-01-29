import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "Willi Nardo",
            country: "Indonesia",
            email: "willi@gmail.com",
            password: "12345",
            loggedIn: true,
        },
    },
    reducers: {
        setName: (state, action) => {
            state.user.name = action.payload;
        },
        setEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setCountry: (state, action) => {
            state.user.country = action.payload;
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
