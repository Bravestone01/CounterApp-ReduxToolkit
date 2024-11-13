import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

 const counterSlice = createSlice({

    name: "counterSlice",
    initialState,

    // actions
    reducers:{
        increment: (state) => {
            // console.log(action.payload)
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value = action.payload;
        }
    }
})


export const { increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;