import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: '',
}

export const countInRoomSlice = createSlice({
    name: 'countInRoom',
    initialState,
    reducers: {
        setCountInRoom(state, action) {
            state.value = action.payload;
        }
    }
})


export const {setCountInRoom} = countInRoomSlice.actions;
export default countInRoomSlice.reducer;