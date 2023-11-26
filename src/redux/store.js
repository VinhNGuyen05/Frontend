import { configureStore } from "@reduxjs/toolkit";
import fruitSlice from "./Reducers/fruitSlice";
import reviewSlice from "./Reducers/reviewSlice";

const store = configureStore({
    reducer: {
        fruit: fruitSlice,
        review: reviewSlice
    }
})

export default store