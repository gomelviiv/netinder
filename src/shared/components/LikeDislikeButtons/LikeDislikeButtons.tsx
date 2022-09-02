import React, { FC, memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useDislikeMatchMutation,
  useLikeMatchMutation,
} from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import useErrorResponse from '@shared/hooks/useErrorResponse';

import { CardButton } from './styles';

interface Props {
  id: string;
}

const LikeDislikeButtons: FC<Props> = ({ id }) => {
  const loginState = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const [handleLike, { isSuccess: isSuccessLike, isError: isErrorLike, error: errorLike }] =
    useLikeMatchMutation();
  const [
    handleDislike,
    { isSuccess: isSuccessDislike, isError: isErrorDislike, error: errorDislike },
  ] = useDislikeMatchMutation();
  const [checkError] = useErrorResponse();

  const handleActionLike = useCallback(
    () => handleLike({ id, token: loginState.token, phoneNumber: loginState.phoneNumber }),
    [id, handleLike, loginState],
  );

  const handleActionDislike = useCallback(
    () => handleDislike({ id, token: loginState.token, phoneNumber: loginState.phoneNumber }),
    [id, handleDislike, loginState],
  );

  useEffect(() => {
    checkError(isErrorLike, errorLike);
  }, [isErrorLike, errorLike]);

  useEffect(() => {
    checkError(isErrorDislike, errorDislike);
  }, [isErrorDislike, errorDislike]);

  useEffect(() => {
    if (isSuccessLike) {
      navigate('/home');
    }
  }, [isSuccessLike]);

  useEffect(() => {
    if (isSuccessDislike) {
      navigate('/home');
    }
  }, [isSuccessDislike]);

  return (
    <>
      <CardButton bg="red" onClick={() => handleActionDislike()}>
        Удалить из пар
      </CardButton>
      <CardButton onClick={() => handleActionLike()}> Образовать пару </CardButton>
    </>
  );
};

export default memo(LikeDislikeButtons);
