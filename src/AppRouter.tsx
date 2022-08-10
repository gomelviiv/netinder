import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '@routes/PrivateRoutes';
import PublicRoute from '@routes/PublicRoutes.';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './configs/routes.config';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {!!PUBLIC_ROUTES &&
        PUBLIC_ROUTES.length &&
        PUBLIC_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PublicRoute>{<routeProps.component />}</PublicRoute>}
            />
          ),
        )}

      {!!PRIVATE_ROUTES &&
        PRIVATE_ROUTES.length &&
        PRIVATE_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PrivateRoute>{<routeProps.component />}</PrivateRoute>}
            />
          ),
        )}
    </Routes>
  );
};

export default AppRouter;
