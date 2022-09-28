import React, { FC } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import { SpinnerContainer } from './style';

interface Props {
  size?: number;
}

const Spinner: FC<Props> = ({ size = 100 }) => {
  return (
    <SpinnerContainer>
      <CircularProgress color="secondary" size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;
