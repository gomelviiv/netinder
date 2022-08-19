import React, { FC } from 'react';

import { Typography } from '@mui/material';
import { IMatch } from '@redux/matches/__types__/matches';
import { IUser } from '@redux/user/__types__/user';
import Card from '@shared/components/Card';

import { BaseInformation, CardsContainer, UserArticle, UserImg, UserInformation, UserTextField } from './styles';

interface Props {
  dataMatches: IMatch[];
  isErrorMatches: boolean;
  isLoadingMatches: boolean;
  dataUser: IUser;
}

const User: FC<Props> = ({ dataMatches, isLoadingMatches, dataUser }) => {
  return (
    <UserArticle>
      <UserInformation>
        <BaseInformation>
          <UserImg src={`${dataUser.photo}`}>{dataUser.name[0]}</UserImg>
          <UserTextField>{dataUser.name}</UserTextField>
          <UserTextField>{dataUser.email}</UserTextField>
        </BaseInformation>
      </UserInformation>
      <CardsContainer>
        {isLoadingMatches ? (
          <Typography>Loading...</Typography>
        ) : (
          dataMatches?.map((match) => <Card key={match.id} match={match} />)
        )}
      </CardsContainer>
    </UserArticle>
  );
};

export default User;
