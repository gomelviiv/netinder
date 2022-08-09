import React from 'react';
import { lazy, Suspense } from 'react';

import { IRouteComponent } from '@shared/interface/routes';

const RouteElement = ({ name }) => {
  const Element = lazy(() => import(`@pages/${name}`));

  //TODO: add spinner
  return (
    <Suspense>
      <Element />
    </Suspense>
  );
};

export const ROUTES = {
  LOGIN: '/',
  HOME: '/home',
};

export const INITIAL_ROUTE = ROUTES.LOGIN;

export const PUBLIC_ROUTES: IRouteComponent[] = [
  {
    path: ROUTES.LOGIN,
    component: () => <RouteElement name="Login" />,
    exact: true,
    name: 'login',
    appTitle: 'Login',
  },
];

export const PRIVATE_ROUTES: IRouteComponent[] = [
  {
    path: ROUTES.HOME,
    component: () => <RouteElement name="Home" />,
    exact: true,
    name: 'mainPage',
    appTitle: 'Главная страница',
  },
];
