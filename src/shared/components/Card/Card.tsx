import React, { FC, memo } from 'react';

import { CardContent } from '@mui/material';
import { IMatch } from '@redux/components/matches/__types__/matches';

import LikeDislikeButtons from '../LikeDislikeButtons';
import {
  CardActions,
  CardContainer,
  CardDescription,
  CardImg,
  CardName,
  CardYears,
  Link,
} from './styles';

interface Props {
  match: IMatch;
}

const CardComponent: FC<Props> = ({ match }) => {
  return (
    <CardContainer>
      <Link to={`/profile/${match.tinderId}`}>
        <CardContent>
          <CardImg
            className="profile__img"
            component="img"
            src={`${match.photoUrl}`}
            alt={`${match.name} photo`}
          />
          <CardDescription>
            <CardName>{match.name}</CardName>
            <CardYears>{match.age}</CardYears>
          </CardDescription>
        </CardContent>
      </Link>
      <CardActions>
        <LikeDislikeButtons id={match.tinderId} />
      </CardActions>
    </CardContainer>
  );
};

export default memo(CardComponent);
