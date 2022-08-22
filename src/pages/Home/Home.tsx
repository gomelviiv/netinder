import React, { FC } from 'react';

import { useGetAllMatchesQuery } from '@redux/components/matches/matches.api';
import { useGetUserInformationQuery } from '@redux/components/user/user.api';
import { useAppSelector } from '@redux/hooks';

import { ContainerHome } from './styles';
import User from './User';

const Home: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  console.log(loginState);
  const { isLoading: isLoadingUser, data: dataUser } = useGetUserInformationQuery(loginState.token);
  const {
    isError: isErrorMatches,
    isLoading: isLoadingMatches,
    data: dataMatches,
  } = useGetAllMatchesQuery({ phoneNumber: loginState.phoneNumber, token: loginState.token });

  console.log('dataMatches', dataMatches);
  console.log('dataUser', dataUser);
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
