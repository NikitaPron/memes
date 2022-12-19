import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    array: [],
}

export const playersCardsSlice = createSlice({
    name: 'playersCards',
    initialState,
    reducers: {
        pushPlayersCards(state, action) {
            state.array.push(action.payload);
        },

        clearPlayersCards(state) {
            state.array = [];
        }
    }
})


export const {pushPlayersCards, clearPlayersCards} = playersCardsSlice.actions;
export default playersCardsSlice.reducer;