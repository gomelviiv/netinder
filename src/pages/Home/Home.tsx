import React, { FC } from 'react';

import { useAppSelector } from '@redux/hooks';
import { useGetAllMatchesQuery } from '@redux/matches/matches.api';
import { useGetUserInformationQuery } from '@redux/user/user.api';

import { ContainerHome } from './styles';
import User from './User';

const Home: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  const { isLoading: isLoadingUser, data: dataUser } = useGetUserInformationQuery(loginState.token);
  const {
    isError: isErrorMatches,
    isLoading: isLoadingMatches,
    data: dataMatches,
  } = useGetAllMatchesQuery({ phoneNumber: loginState.phoneNumber, token: loginState.token });

  return (
    <ContainerHome>
      {isLoadingUser ? (
        <p>Loading...</p>
      ) : (
        <User
          dataMatches={dataMatches}
          isErrorMatches={isErrorMatches}
          isLoadingMatches={isLoadingMatches}
          dataUser={dataUser}
        />
      )}
    </ContainerHome>
  );
};

export default Home;
