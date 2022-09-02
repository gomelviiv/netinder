import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@redux/store';
import Alert from '@shared/components/Alert';

import AppRouter from './AppRouter';
import './styles/index.scss';

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
