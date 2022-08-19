import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { CardContent } from '@mui/material';
import { IMatch } from '@redux/matches/__types__/matches';

import { CardActions, CardButton, CardContainer, CardDescription, CardImg, CardName, CardYears } from './styles';

interface Props {
  match: IMatch;
}

const CardComponent: FC<Props> = ({ match }) => {
  return (
    <CardContainer>
      <Link to={`/${match.tinderId}`}>
        <CardContent>
          <CardImg component="img" src={`${match.photo}`} alt="Paella dish" />
          <CardDescription>
            <CardName>{match.name}</CardName>
            <CardYears>{match.age}</CardYears>
          </CardDescription>
        </CardContent>
      </Link>
      <CardActions>
        <CardButton bg="red"> DELETE </CardButton>
        <CardButton> MATCHES </CardButton>
      </CardActions>
    </CardContainer>
  );
};

export default CardComponent;
