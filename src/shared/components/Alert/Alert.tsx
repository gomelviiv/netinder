import React, { FC, useState } from 'react';

import AlertTitle from '@mui/material/AlertTitle';

import { AlertContainer, ErroDialog } from './styles';

interface Props {
  error: any;
}

const Alert: FC<Props> = ({ error }) => {
  const [isErrorDialog, setIsErrorDialog] = useState(true);
  const { status } = error;
  console.log(error);

  const handleCloseErrorDialog = () => {
    setIsErrorDialog(false);
  };

  return (
    <ErroDialog className="error-dialog" scroll="paper" open={isErrorDialog} onClose={handleCloseErrorDialog}>
      <AlertContainer severity="error">
        <AlertTitle>Error: {status}</AlertTitle>
        {error?.data.error}
      </AlertContainer>
    </ErroDialog>
  );
};

export default Alert;
