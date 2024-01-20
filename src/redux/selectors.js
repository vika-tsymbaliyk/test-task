import { createSelector } from "@reduxjs/toolkit";

export const selectCars = ({ cars: {items} }) => items;

export const selectIsLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;

export const selectFilter = state => state.filter;

export const selectVisibleCars = createSelector(
    [selectCars, selectFilter],
    (cars, filter) => {
        if (!filter) {
            return cars; 
        }
        return cars.filter(car => car.make.toLowerCase().includes(filter.toLowerCase()))
    }
)