import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@configs/routes.config';
import { useAppSelector } from '@redux/hooks';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const login = useAppSelector((data) => data.login);
  return login.token ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
