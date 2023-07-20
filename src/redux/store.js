import { configureStore } from "@reduxjs/toolkit";
import citySliceReducer from "./city/citySlice";

const store = configureStore({
    reducer: {
        city: citySliceReducer,
    }
});

export default store;