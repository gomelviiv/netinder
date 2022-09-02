import React, { FC, memo } from 'react';

import { Typography } from '@mui/material';
import { IMatchProfile } from '@redux/components/matches/__types__/matches';

import { ProfileImg, ProfilePreview } from './styles';

interface Props {
  data: IMatchProfile;
}

const Preview: FC<Props> = ({ data }) => {
  return (
    <ProfilePreview>
      <ProfileImg src={`${data.photos[0].url}`}></ProfileImg>
      <Typography>{`${data.name} ${data.birthDate}`}</Typography>
    </ProfilePreview>
  );
};

export default memo(Preview);
