import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filterSlise";
import { favoritesReducer } from "./favoritesSlice";

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};


export const store = configureStore({
  reducer: {
      favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
      cars: carsReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);
