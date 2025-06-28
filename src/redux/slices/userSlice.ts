import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ email: string; name?: string }>) {
      state.email = action.payload.email;
      state.name = action.payload.name ?? null;
      state.isLoggedIn = true;
    },
    signOut(state) {
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
