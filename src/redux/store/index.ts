import { tinderApi } from '@redux/login/login.api';
import { tinderProfileReducer } from '@redux/login/login.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [tinderApi.reducerPath]: tinderApi.reducer,
    tinderProfile: tinderProfileReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
