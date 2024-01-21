import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./opetations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const uniqueCars = action.payload.filter(newCar =>
          !state.items.some(existingCar => existingCar.id === newCar.id)
        );
        state.items = [...state.items, ...uniqueCars];
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
