import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './__constants__';
import { ILoginInformation } from './__types__';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    savePhone(state: ILoginInformation, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
    saveSmsCode(state: ILoginInformation, action: PayloadAction<string>) {
      state.smsCode = action.payload;
    },
    saveEmailCode(state: ILoginInformation, action: PayloadAction<string>) {
      state.emailCode = action.payload;
    },
    saveToken(state: ILoginInformation, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { savePhone, saveSmsCode, saveEmailCode, saveToken } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
