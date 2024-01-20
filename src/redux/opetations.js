import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6527ab7d931d71583df12889.mockapi.io";

export const fetchCars = createAsyncThunk(
    'adverts/fetchAll',
    async ({ page = 1, limit = 12 }, thunkApi) => {
        try {
            const { data } = await axios.get('/adverts', {
                params: {
                    page,
                    limit,
                },
            })
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

// export const addContact = createAsyncThunk(
//     'contact/addTodo',
//     async (contact, thunkApi) => {
//         try {
//             const { data } = await axios.post('/contacts', contact)
//             return data
//         } catch(error) {
//             return thunkApi.rejectWithValue(error.message)
//     }
//     }
// )

// export const deleteContact = createAsyncThunk(
//     'contact/deleteContact',
//     async (id, thunkApi) => {
//         try {
//             const { data } = await axios.delete(`/contacts/${id}`)
//             return data.id
//         } catch(error) {
//             return thunkApi.rejectWithValue(error.message)
//     }
//     }
// )