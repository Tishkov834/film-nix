import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      const { token, user } = payload;
      state.token = token;
      state.user = user;
    },
    removeUser(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
