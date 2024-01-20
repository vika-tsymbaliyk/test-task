import { configureStore } from '@reduxjs/toolkit'
import { carsReducer } from './carsSlice'
import { filterReducer } from './filterSlise'

export const store = configureStore({
    reducer: {
            cars: carsReducer,
            filter: filterReducer
          },
  })