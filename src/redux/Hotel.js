import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL, apiParameter, apiKey } from "../utils/apiService"

export const fetchDataHotel = createAsyncThunk(
    "hotel/fetchDataHotel",
    async () => {
        try {
            const res = await fetch(`${apiURL}${apiParameter}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": `${apiKey}`,
                },
            }).then((response) => response.json());
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    }
)

export const Hotel = createSlice({
    name: "hotel",
    initialState: {
        data: null
    },
    extraReducers: {
        [fetchDataHotel.fulfilled]: (state, action) => {
            state.data = action.payload;
        },

    }
})


export default Hotel.reducer;