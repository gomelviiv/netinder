import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import setMiddleware from '@redux/middleware';
import reducers from '@redux/reducers';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: setMiddleware(),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
