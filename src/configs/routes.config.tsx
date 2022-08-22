import React from 'react';
import { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';
import { IRouteComponent } from '@shared/interface/routes';

const RouteElement = ({ name }) => {
  const Element = lazy(() => import(`@pages/${name}`));

  return (
    <Suspense fallback={<CircularProgress />}>
      <Element />
    </Suspense>
  );
};

export const enum ROUTES {
  LOGIN = '/',
  HOME = '/home',
  PROFILE = '/profile/:id',
}

export const INITIAL_ROUTE = ROUTES.LOGIN;

export const PUBLIC_ROUTES: IRouteComponent[] = [
  {
    path: ROUTES.LOGIN,
    component: () => <RouteElement name="Login" />,
    exact: true,
    appTitle: 'Login',
  },
];

export const PRIVATE_ROUTES: IRouteComponent[] = [
  {
    path: ROUTES.HOME,
    component: () => <RouteElement name="Home" />,
    exact: true,
    appTitle: 'Home',
  },
  {
    path: ROUTES.PROFILE,
    component: () => <RouteElement name="Profile" />,
    appTitle: 'Profile',
  },
];
