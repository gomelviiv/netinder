import React, { FC, useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import { useAppSelector } from '@redux/hooks';

import { AlertContainer, ErrorDialog } from './styles';

const Alert: FC = () => {
  const { data, isError, status } = useAppSelector((state) => state.errors);
  const [isErrorDialog, setIsErrorDialog] = useState(false);

  const handleCloseErrorDialog = () => {
    setIsErrorDialog(false);
  };

  useEffect(() => {
    setIsErrorDialog(isError);
  }, [isError]);

  return (
    <ErrorDialog
      className="error-dialog"
      scroll="paper"
      open={isErrorDialog}
      onClose={handleCloseErrorDialog}
    >
      <AlertContainer severity="error">
        <AlertTitle>Error: {status}</AlertTitle>
        <Typography>
          <>Message: {data?.error}</>
        </Typography>
      </AlertContainer>
    </ErrorDialog>
  );
};

export default Alert;
