import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    url: 'url',
    userName: '',
    startSeconds: 0,
    isPlayingNow: 'false',
}


export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setMusicOffer(state, action) {
            state.userName = action.payload;
        },

        setMusicURL(state, action) {
            state.url = action.payload;
        },

        setIsPlayingNow(state, action) {
            state.isPlayingNow = action.payload;
        },

        setStartSeconds(state, action) {
            state.startSeconds = action.payload;
        },
    }
})


export const { setMusicOffer, setMusicURL, setIsPlayingNow, setStartSeconds } = musicSlice.actions;
export default musicSlice.reducer;


