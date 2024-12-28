import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Page {
    Landing,
    Main,
}

const pages = ["welcome", "feed"];

interface PageState {
    current: Page;
}

const initPage = new URLSearchParams(window.location.search).get("page");

if (initPage === null || pages.indexOf(initPage) === -1)
    history.replaceState(null, "", "/golobe/?page=welcome");

export const pageFromUrl = () =>
    new URLSearchParams(window.location.search).get("page") === "feed"
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

            window.scrollTo(0, 0);

            history.pushState(
                null,
                "",
                `/golobe/?page=${pages[action.payload]}`,
            );
            state.current = action.payload;
        },
        setPage(state, action: PayloadAction<Page>) {
            window.scrollTo(0, 0);

            state.current = action.payload;
        },
    },
});

export const { openPage, setPage } = pageSlice.actions;

export default pageSlice.reducer;
