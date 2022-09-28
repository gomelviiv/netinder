import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '@routes/PrivateRoutes';
import PublicRoute from '@routes/PublicRoutes.';
import Header from '@shared/layout/Header';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './configs/routes.config';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map(
        (routeProps): ReactNode => (
          <Route
            {...routeProps}
            key={routeProps.path}
            element={<PublicRoute>{<routeProps.component />}</PublicRoute>}
          />
        ),
      )}

      {PRIVATE_ROUTES.map(
        (routeProps): ReactNode => (
          <Route
            {...routeProps}
            key={routeProps.path}
            element={
              <PrivateRoute>
                <>
                  <Header />
                  {<routeProps.component />}
                </>
              </PrivateRoute>
            }
          />
        ),
      )}
    </Routes>
  );
};

export default AppRouter;
