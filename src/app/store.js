import { configureStore } from "@reduxjs/toolkit";
// Store is used to store data in the browser

import { cryptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
})

