import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './__constants__';
import { IError } from './__types__';

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    saveError(state: IError, action: PayloadAction<IError>) {
      state.data = action.payload.data;
      state.isError = action.payload.isError;
      state.status = action.payload.status;
    },
  },
});

export const { saveError } = errorsSlice.actions;
export const errorsReducers = errorsSlice.reducer;
