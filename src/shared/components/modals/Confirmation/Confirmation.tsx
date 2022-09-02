import React, { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '@mui/material';
import { StepperContext } from '@pages/Login/Stepper';
import { useAppSelector } from '@redux/hooks';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';
import useErrorResponse from '@shared/hooks/useErrorResponse';

interface Props<T> {
  title: string;
  queryFunction: (data: T) => void;
  name: ConfirmationCode;
  error?: FetchBaseQueryError | SerializedError;
  isError?: boolean;
  isSuccess: boolean;
}

const Confirmation = <T extends { sessionHash: string }>({
  title,
  name,
  queryFunction,
  error,
  isError,
  isSuccess,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, handleSubmit } = useForm();
  const { resetSteps, goToNextStep } = useContext(StepperContext);
  const loginState = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const [checkError] = useErrorResponse();

  const closeModal = () => {
    resetSteps();
  };

  const onSubmit: SubmitHandler<T> = (data) => {
    queryFunction({ [name]: data[name], sessionHash: loginState.sessionHash } as T);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      if (name === ConfirmationCode.EMAIL_CODE) {
        navigate('/home');
      } else {
        goToNextStep();
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    checkError(isError, error);
  }, [isError, error]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="login Modal"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">{title}</h2>
        <TextField {...register(`${name}`)} label={title} variant="outlined" />
        <Button type="submit" variant="outlined">
          отправить
        </Button>
      </form>
    </Modal>
  );
};

export default Confirmation;
