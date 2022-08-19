import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './__constants__';
import { ITinderProfile } from './__types__';

export const loginSlice = createSlice({
  name: 'tinderProfile',
  initialState,
  reducers: {
    savePhone(state: ITinderProfile, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    saveSmsCode(state: ITinderProfile, action: PayloadAction<string>) {
      state.smsCode = action.payload;
    },
    saveEmailCode(state: ITinderProfile, action: PayloadAction<string>) {
      state.emailCode = action.payload;
    },
    saveToken(state: ITinderProfile, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { savePhone, saveSmsCode, saveEmailCode, saveToken } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
