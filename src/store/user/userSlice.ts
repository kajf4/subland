import { createSlice } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from 'constants/reducerNames';

const initialState = {
  isAuthenticated: false // for private route system
};

const userSlice = createSlice({
  name: REDUCER_NAMES.USER,
  initialState,
  reducers: {
    userLogoutAction: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = false;
    }
  }
});

export const { userLogoutAction } = userSlice.actions;

export default userSlice.reducer;
