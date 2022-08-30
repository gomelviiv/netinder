import React, { FC, useState } from 'react';

import AlertTitle from '@mui/material/AlertTitle';

import { AlertContainer, ErrorDialog } from './styles';

interface Props {
  error: any;
}

const Alert: FC<Props> = ({ error }) => {
  const [isErrorDialog, setIsErrorDialog] = useState(true);
  const { status } = error;

  const handleCloseErrorDialog = () => {
    setIsErrorDialog(false);
  };

  return (
    <ErrorDialog
      className="error-dialog"
      scroll="paper"
      open={isErrorDialog}
      onClose={handleCloseErrorDialog}
    >
      <AlertContainer severity="error">
        <AlertTitle>Error: {status}</AlertTitle>
        {error?.data.error}
      </AlertContainer>
    </ErrorDialog>
  );
};

export default Alert;
