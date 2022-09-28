import React, { FC, useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import { logOut } from '@redux/components/login/login.slice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

import { ErrorStatus } from './__constants__';
import { AlertContainer, ErrorDialog } from './styles';

const Alert: FC = () => {
  const { data, isError, status } = useAppSelector((state) => state.errors);
  const [isErrorDialog, setIsErrorDialog] = useState(false);
  const dispatch = useAppDispatch();

  const handleCloseErrorDialog = () => {
    setIsErrorDialog(false);
  };

  useEffect(() => {
    if (status === ErrorStatus.UNAUTHORIZED) {
      dispatch(logOut());
    }

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
