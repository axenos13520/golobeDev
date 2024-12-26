import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Page {
    Landing,
    Main,
}

const endpoints = ["welcome", "feed"];

interface PageState {
    current: Page;
}

if (endpoints.indexOf(window.location.pathname.split("/").reverse()[0]) === -1)
    history.replaceState(null, "", "/golobe/welcome");

export const pageFromUrl = () =>
    window.location.pathname.split("/").reverse()[0] === "feed"
        ? Page.Main
        : Page.Landing;

const initialState: PageState = {
    current: pageFromUrl(),
};

export const pageSlice = createSlice({
    name: "page",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        openPage(state, action: PayloadAction<Page>) {
            if (state.current === action.payload) return;

            history.pushState(null, "", `/golobe/${endpoints[action.payload]}`);
            state.current = action.payload;
        },
        setPage(state, action: PayloadAction<Page>) {
            state.current = action.payload;
        },
    },
});

export const { openPage, setPage } = pageSlice.actions;

export default pageSlice.reducer;
