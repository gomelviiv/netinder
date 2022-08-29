import React, { FC, useCallback } from 'react';

import {
  useLazyDislikeMatchQuery,
  useLazyLikeMatchQuery,
} from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import useActionsWithProfile from '@shared/hooks/useActionsWithProfile';

import Alert from '../Alert';
import { CardButton } from './styles';

interface Props {
  id: string;
}

const enum Actiontype {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

const LikeDislikeButtons: FC<Props> = ({ id }) => {
  const loginState = useAppSelector((state) => state.login);
  const [handleLike, errorLike, isErrorLike, isErrorGetMatchAfterLike, errorGetMatchAfterLike] =
    useActionsWithProfile(useLazyLikeMatchQuery, {
      token: loginState.token,
      phoneNumber: loginState.phoneNumber,
    });
  const [
    handleDislike,
    errorDislike,
    isErrorDislike,
    isErrorGetMatchAfterDislike,
    errorGetMatchAfterDislike,
  ] = useActionsWithProfile(useLazyDislikeMatchQuery, {
    token: loginState.token,
    phoneNumber: loginState.phoneNumber,
  });

  const hanldleActionClick = useCallback(
    (name: string, tinderId = id, token = loginState.token) =>
      name == Actiontype.LIKE
        ? handleLike({ id: tinderId, token, phoneNumber: loginState.phoneNumber })
        : handleDislike({ id: tinderId, token, phoneNumber: loginState.phoneNumber }),
    [id, handleDislike, handleLike, loginState],
  );

  return (
    <>
      {isErrorLike && <Alert error={errorLike} />}
      {isErrorDislike && <Alert error={errorDislike} />}
      {isErrorGetMatchAfterLike && <Alert error={errorGetMatchAfterLike} />}
      {isErrorGetMatchAfterDislike && <Alert error={errorGetMatchAfterDislike} />}
      <CardButton bg="red" onClick={() => hanldleActionClick(Actiontype.DISLIKE)}>
        DELETE
      </CardButton>
      <CardButton onClick={() => hanldleActionClick(Actiontype.LIKE)}> MATCH </CardButton>
    </>
  );
};

export default LikeDislikeButtons;
