import React, { FC, useEffect } from 'react';

import { Alert as AlertMaterial } from '@mui/material/';
import { useGetAllMatchesQuery } from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import Card from '@shared/components/Card';
import useErrorResponse from '@shared/hooks/useErrorResponse';

import { CardsContainer, ContainerHome } from './styles';

const Home: FC = () => {
  const loginState = useAppSelector((state) => state.login);
  const {
    isError: isErrorMatches,
    error: errorMatches,
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
  const [checkError] = useErrorResponse();

  useEffect(() => {
    checkError(isErrorMatches, errorMatches);
  }, [isErrorMatches, errorMatches]);

  return (
    <ContainerHome>
      <CardsContainer>
        {dataMatches && !dataMatches.length ? (
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
