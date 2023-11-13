import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isFetching: boolean;
  isAuth: boolean;
  walletId?: number;
}
const initialState: AuthState = {
  isFetching: false,
  isAuth: false,
  walletId: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequested: (state, action: PayloadAction<any>) => {
      state.isFetching = true;
      action;
    },
    loginSucceded: (state, action: PayloadAction<number>) => {
      state.isFetching = false;
      state.isAuth = true;
      state.walletId = action.payload;
    },
    logoutRequested: (state) => {
      state.isFetching = true;
    },
    logoutSucceded: (state) => {
      state.isFetching = false;
      state.isAuth = false;
    },
  },
});

export const {
  loginRequested,
  loginSucceded,
  logoutRequested,
  logoutSucceded,
} = authSlice.actions;

export default authSlice.reducer;
