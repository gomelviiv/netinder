import React, { FC } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';
import { Alert as AlertMaterial } from '@mui/material/';
import { logOut } from '@redux/components/login/login.slice';
import { IMatch } from '@redux/components/matches/__types__/matches';
import { IUser } from '@redux/components/user/__types__/user';
import { useAppDispatch } from '@redux/hooks';
import Card from '@shared/components/Card';

import {
  BaseInformation,
  CardsContainer,
  UserArticle,
  UserImg,
  UserInformation,
  UserTextField,
} from './styles';

interface Props {
  dataMatches: IMatch[];
  isErrorMatches: boolean;
  isLoadingMatches: boolean;
  dataUser: IUser;
  isLoadingUser: boolean;
}

const User: FC<Props> = ({ dataMatches, isLoadingUser, isLoadingMatches, dataUser }) => {
  const dispatch = useAppDispatch();

  const handleExit = () => {
    dispatch(logOut());
  };

  return (
    <UserArticle>
      {isLoadingUser ? (
        <p>Loading...</p>
      ) : (
        <UserInformation>
          {dataUser && (
            <BaseInformation>
              <UserImg src={`${dataUser.photo}`}>{dataUser.name[0]}</UserImg>
              <UserTextField>{dataUser.name}</UserTextField>
              <UserTextField>{dataUser.email}</UserTextField>
            </BaseInformation>
          )}

          <Button onClick={handleExit}>
            <LogoutIcon /> Exit
          </Button>
        </UserInformation>
      )}
      <CardsContainer>
        {isLoadingMatches ? (
          <Typography>Loading...</Typography>
        ) : !dataMatches.length ? (
          <AlertMaterial severity="warning">
            На данный момент у вас нет пары для 100% метча, дайте на пару мин (30) и мы всё
            исправим!
          </AlertMaterial>
        ) : (
          dataMatches?.map((match) => <Card key={match.tinderId} match={match} />)
        )}
      </CardsContainer>
    </UserArticle>
  );
};

export default User;
