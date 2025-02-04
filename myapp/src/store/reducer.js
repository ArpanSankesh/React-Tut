import { createAction, createReducer } from "@reduxjs/toolkit";

// const increment = createAction("counter/increment");
const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { value : 0};

const rootReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(incrementByAmount, (state, action) => {
        state.value+= action.payload;
    });
});

export default rootReducer