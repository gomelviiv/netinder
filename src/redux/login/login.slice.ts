import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './__constants__';
import { TinderProfile } from './__types__';

export const tinderProfileSlice = createSlice({
  name: 'tinderProfile',
  initialState,
  reducers: {
    savePhone(state: TinderProfile, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    savePhoneCode(state: TinderProfile, action: PayloadAction<string>) {
      state.phoneCode = action.payload;
    },
    saveEmailCode(state: TinderProfile, action: PayloadAction<string>) {
      state.emailCode = action.payload;
    },
    saveToken(state: TinderProfile, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { savePhone } = tinderProfileSlice.actions;
export const tinderProfileReducer = tinderProfileSlice.reducer;
