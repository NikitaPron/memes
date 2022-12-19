import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    array: [],
    isSended: false,
}

export const myCardsSlice = createSlice({
    name: 'myCards',
    initialState,
    reducers: {
        setMyCards(state, action) {
            state.array = action.payload;
        },

        pushToMyCards(state, action) {
            state.array.push(action.payload);
        },

        setIsSended(state, action) {
            state.isSended = action.payload;
        }
    }
})


export const {setMyCards, pushToMyCards, setIsSended} = myCardsSlice.actions;
export default myCardsSlice.reducer;