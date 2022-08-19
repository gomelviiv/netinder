import { loginApi } from '@redux/login/login.api';
import { loginReducer } from '@redux/login/login.slice';
import { matchesApi } from '@redux/matches/matches.api';
import { userApi } from '@redux/user/user.api';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware).concat(matchesApi.middleware).concat(userApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
