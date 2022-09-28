import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetMatchByIdQuery } from '@redux/components/matches/matches.api';
import { useAppSelector } from '@redux/hooks';
import useErrorResponse from '@shared/hooks/useErrorResponse';

import Description from './components/Description';
import Interests from './components/Interests';
import Photo from './components/Photo';
import Skeleton from './components/Skeleton';
import { ProfileContainer } from './styles';

const Profile: FC = () => {
  const { id } = useParams();
  const loginState = useAppSelector((data) => data.login);
  const { data, isLoading, isError, error } = useGetMatchByIdQuery({
    id,
    token: loginState.token,
    phoneNumber: loginState.phoneNumber,
  });
  const [checkError] = useErrorResponse();

  useEffect(() => {
    checkError(isError, error);
  }, [isError, error]);

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <ProfileContainer>
          <Description data={data} id={id} />

          <Interests data={data} />

          <Photo data={data} />
        </ProfileContainer>
      )}
    </div>
  );
};

export default Profile;
