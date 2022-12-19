import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: ''
};



export const situationSlice = createSlice({
  name: 'situation',
  initialState,
  reducers: {
    setSituation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSituation } = situationSlice.actions;
export default situationSlice.reducer;