import { createSlice } from "@reduxjs/toolkit";


export const user = createSlice({
    name: "user",
    initialState: {
        userData: {
            username: "user",
            email: "user@gmail.com",
            password: "12345",
            loggedIn: false,
            favourite: [],
            userProfile: {
                fullname: "Willi Nardo",
                email: "user@gmail.com",
            },
        },
    },
    reducers: {
        setFullname: (state, action) => {
            state.userData.userProfile.fullname = action.payload;
        },
        setEmail: (state, action) => {
            state.userData.userProfile.email = action.payload;
        },
        LogIn: (state, action) => {
            state.userData.loggedIn = action.payload;
        },

    },
});

export const {
    setFullname,
    setEmail,
    LogIn,
} = user.actions;

export default user.reducer;
