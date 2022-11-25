import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './counterSlice'
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})