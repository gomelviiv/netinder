import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from '@routes/PublicRoutes.';

import { PRIVATE_ROUTES } from './configs/routes.config';

const AppRouter: React.FC = () => {
  console.log(PRIVATE_ROUTES);
  return (
    <Routes>
      {/* {!!PUBLIC_ROUTES &&
        PUBLIC_ROUTES.length &&
        PUBLIC_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PublicRoute>{<routeProps.component />}</PublicRoute>}
            />
          ),
        )} */}

      {!!PRIVATE_ROUTES &&
        PRIVATE_ROUTES.length &&
        PRIVATE_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={<PublicRoute>{<routeProps.component />}</PublicRoute>}
            />
          ),
        )}
    </Routes>
  );
};

export default AppRouter;
