// import { createSelector } from "@reduxjs/toolkit";

export const selectCars = ({ cars: {items} }) => items;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;
