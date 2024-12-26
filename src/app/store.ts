import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.ts";
import pageReducer from "./pageSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
