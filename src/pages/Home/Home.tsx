import React, { FC } from 'react';

import { Alert as AlertMaterial, Typography } from '@mui/material/';
import { useGetAllMatchesQuery } from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import Alert from '@shared/components/Alert';
import Card from '@shared/components/Card';

import { CardsContainer, ContainerHome } from './styles';

const Home: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  const {
    isError: isErrorMatches,
    error: errorMatches,
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
      {isErrorMatches && <Alert error={errorMatches} />}
      <CardsContainer>
        {isLoadingMatches ? (
          <Typography>Loading...</Typography>
        ) : dataMatches && !dataMatches.length ? (
          <AlertMaterial severity="warning">
            На данный момент у вас нет пары для 100% метча, дайте нам пару мин (30) и мы всё
            исправим!
          </AlertMaterial>
        ) : (
          dataMatches?.map((match) => <Card key={match.tinderId} match={match} />)
        )}
      </CardsContainer>
    </ContainerHome>
  );
};

export default Home;
