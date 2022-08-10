import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@configs/routes.config';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const user = { isAuthenticated: true };
  return user?.isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
