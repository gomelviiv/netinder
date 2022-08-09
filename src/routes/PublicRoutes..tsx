import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { INITIAL_ROUTE } from '@configs/routes.config';

// import useIsLoggedIn from 'shared/api/hooks/useIsLogin';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const user = { isAuthenticated: true };
  console.log(user);
  return !user?.isAuthenticated ? <Navigate to={INITIAL_ROUTE} /> : children;
};

export default PublicRoute;
