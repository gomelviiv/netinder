import { isEmpty } from 'lodash';
import React, { FC, memo } from 'react';

import { Typography } from '@mui/material';
import { IMatchProfile } from '@redux/components/matches/__types__/matches';

import { InterestsCard, InterestsContainer } from './styles';

interface Props {
  data: IMatchProfile;
}

const Interests: FC<Props> = ({ data }) => {
  return (
    <InterestsContainer>
      {!isEmpty(data.userInterests) &&
        data.userInterests.map((interest) => (
          <InterestsCard key={interest.id}>
            <Typography> {interest.name}</Typography>
          </InterestsCard>
        ))}
    </InterestsContainer>
  );
};

export default memo(Interests);
