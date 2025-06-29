import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  email: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ email: string; name?: string; token: string }>) {
      state.email = action.payload.email;
      state.name = action.payload.name ?? null;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    signOut(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
