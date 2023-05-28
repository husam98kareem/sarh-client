import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import humanService from './humanService'


const initialState = {
    vacations: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createVacation = createAsyncThunk(
    'orders/create',
    async(vacationData, thunkAPI) => {
        try {
            return await humanService.createVacation(vacationData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getVacations = createAsyncThunk(
    'vacations/getAll',
    async(_, thunkAPI) => {
        try {
            return await humanService.getVacations()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const humanSlice = createSlice({
    name: 'vacations',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },

    extraReducers: (builder) => {
        builder
            .addCase(createVacation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createVacation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.vacations.push(action.payload)
            })
            .addCase(createVacation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

        .addCase(getVacations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getVacations.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true

                state.vacations = action.payload
            })
            .addCase(getVacations.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = humanSlice.actions
export default humanSlice.reducer