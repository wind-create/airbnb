import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: "user",
    initialState: {
        userData: {
            username: "willi",
            email: "willi@gmail.com",
            password: "willi123",
            loggedIn: false,
            favourite: [],
            userProfile: {
                fullname: null,
                email: null,
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

    },
});

export const {
    setFullname,
    setEmail,
} = user.actions;

export default user.reducer;