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
            whishlist: [],
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
        saved: (state, action) => {
            const FindHotel = state.user.whishlist.find(
                (item) => item.hotel.hotelId === action.payload.hotel.hotelId
            );
            if (FindHotel) {
                const savedHotel = state.user.whishlist.filter(
                    (item) => item.hotel.hotelId !== FindHotel.hotel.hotelId
                );
                state.user.whishlist = savedHotel;
            } else {
                state.user.whishlist.push(action.payload);
            }
        },
    },
});

export const {
    setname,
    setEmail,
    setCountry,
    saved,
    LogIn,
} = user.actions;

export default user.reducer;
