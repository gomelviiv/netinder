import React, { FC, useCallback } from 'react';

import { CardContent } from '@mui/material';
import { IMatch } from '@redux/components/matches/__types__/matches';
import { useLazyDislikeMatchQuery, useLazyLikeMatchQuery } from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';

import { CardActions, CardButton, CardContainer, CardDescription, CardImg, CardName, CardYears, Link } from './styles';

interface Props {
  match: IMatch;
}

const enum Actiontype {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

const CardComponent: FC<Props> = ({ match }) => {
  const login = useAppSelector((state) => state.login);
  const [handleLike] = useLazyLikeMatchQuery();
  const [handleDislike] = useLazyDislikeMatchQuery();

  const hanldleActionClick = useCallback(
    (name: string, tinderId = match.tinderId, token = login.token) =>
      name == Actiontype.LIKE ? handleLike({ id: tinderId, token }) : handleDislike({ id: tinderId, token }),
    [match, handleDislike, handleLike, login],
  );

  return (
    <CardContainer>
      <Link to={`/profile/${match.tinderId}`}>
        <CardContent>
          <CardImg className="profile__img" component="img" src={`${match.photoUrl}`} alt={`${match.name} photo`} />
          <CardDescription>
            <CardName>{match.name}</CardName>
            <CardYears>{match.age}</CardYears>
          </CardDescription>
        </CardContent>
      </Link>
      <CardActions>
        <CardButton bg="red" onClick={() => hanldleActionClick(Actiontype.DISLIKE)}>
          DELETE
        </CardButton>
        <CardButton onClick={() => hanldleActionClick(Actiontype.LIKE)}> MATCH </CardButton>
      </CardActions>
    </CardContainer>
  );
};

export default CardComponent;
