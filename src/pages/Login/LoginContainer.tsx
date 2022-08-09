import React, { FC } from 'react';

import { useLoginUserMutation } from '@redux/login/login.api';

import Login from './Login';

const LoginContainer: FC = () => {
  const [loginUser, { isError, isLoading }] = useLoginUserMutation();
  return <Login loginUser={loginUser} isError={isError} isLoading={isLoading} />;
};

export default LoginContainer;
