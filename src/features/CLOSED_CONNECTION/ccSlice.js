import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const connectionStatusSlice = createSlice({
  name: 'connection_status',
  initialState,
  reducers: {
    setConnectionStatus(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setConnectionStatus } = connectionStatusSlice.actions;
export default connectionStatusSlice.reducer;
