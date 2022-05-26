/* =============== REDUX STORE =============== */

import { configureStore } from "@reduxjs/toolkit";

/* =============== SLICE IMPORT =============== */
import UISlice from "./ui-slice";
import CartSlice from "./cart-slice";

/* =============== IMPORTING SLICES =============== */
const store = configureStore({
    reducer: {
        ui: UISlice.reducer,
        cart: CartSlice.reducer
    }
})


export default store;