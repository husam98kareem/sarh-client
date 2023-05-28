import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orders/orderSlice'
import humanReducer from '../features/human/humanSlice'

const store = configureStore({
    reducer: {
        orders: orderReducer,
        vacations: humanReducer
    },
});

export default store;