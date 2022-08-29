import React, { FC } from 'react';

import { useGetAllMatchesQuery } from '@redux/components/matches/matches.api';
import { useGetUserInformationQuery } from '@redux/components/user/user.api';
import { useAppSelector } from '@redux/hooks';
import Alert from '@shared/components/Alert';

import { ContainerHome } from './styles';
import User from './User';

const Home: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  const {
    isLoading: isLoadingUser,
    data: dataUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUserInformationQuery(loginState.token);
  const {
    isError: isErrorMatches,
    error: erroMatches,
    isLoading: isLoadingMatches,
    data: dataMatches,
  } = useGetAllMatchesQuery(
    { phoneNumber: loginState.phoneNumber, token: loginState.token },
    {
      refetchOnFocus: true,
      pollingInterval: 1000 * 60 * 5,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    },
  );

  return (
    <ContainerHome>
      {isErrorUser && <Alert error={errorUser} />}
      {isErrorMatches && <Alert error={erroMatches} />}

      <User
        dataMatches={dataMatches}
        isErrorMatches={isErrorMatches}
        isLoadingUser={isLoadingUser}
        isLoadingMatches={isLoadingMatches}
        dataUser={dataUser}
      />
    </ContainerHome>
  );
};

export default Home;
