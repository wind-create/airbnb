import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        user: {
            username: "user",
            email: "user@gmail.com",
            password: "12345",
            loggedIn: false,
            favourite: [],
            name: "Willi Nardo",
        },
    },
    reducers: {
        setFullname: (state, action) => {
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
    setFullname,
    setEmail,
    LogIn,
} = user.actions;

export default user.reducer;
