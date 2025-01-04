import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FeedTab {
    Flights,
    Stays,
}

interface FeedState {
    tab: FeedTab;
}

const initialState: FeedState = {
    tab: FeedTab.Flights,
};

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        setFeedTab(state, action: PayloadAction<FeedTab>) {
            state.tab = action.payload;
        },
    },
});

export const { setFeedTab } = feedSlice.actions;

export default feedSlice.reducer;
