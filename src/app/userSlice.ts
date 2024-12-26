import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    userId: number | undefined;
}

const initialState: UserState = {
    userId: undefined,
};

export const userSlice = createSlice({
    name: "user",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserId(state, action: PayloadAction<number>) {
            state.userId = action.payload;
        },
    },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
