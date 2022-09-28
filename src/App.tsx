import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@redux/store';
import Alert from '@shared/components/Alert';

import AppRouter from './AppRouter';
import { DivLogo } from './styles';
import './styles/index.scss';
import './styles/reset.scss';

const App: FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Alert />
          <DivLogo>
            <AppRouter />
          </DivLogo>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
