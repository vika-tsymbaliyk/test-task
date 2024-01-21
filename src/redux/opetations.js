import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6527ab7d931d71583df12889.mockapi.io";
export const itemsPerPage = 12; 

export const fetchCars = createAsyncThunk(
  "adverts/fetchAll",
  async (page, thunkApi) => {
    const config = {
      params: {
        page,
        limit : itemsPerPage,
      },
    }
    
    try {
      const { data } = await axios.get("/adverts", config);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
