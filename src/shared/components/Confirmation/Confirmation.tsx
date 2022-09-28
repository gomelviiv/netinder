import React, { useContext, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import { StepperContext } from '@pages/Login/Stepper';
import { useAppSelector } from '@redux/hooks';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';
import useErrorResponse from '@shared/hooks/useErrorResponse';

import { ConfirmationContainer, ConfirmationFormCode, FormButton, FormTextField } from './styles';

interface Props<T> {
  title: string;
  queryFunction: (data: T) => void;
  name: ConfirmationCode;
  error?: FetchBaseQueryError | SerializedError;
  isError?: boolean;
  isSuccess: boolean;
  placeholder: string;
}

const Confirmation = <T extends { sessionHash: string }>({
  title,
  name,
  queryFunction,
  error,
  isError,
  placeholder,
  isSuccess,
}: Props<T>) => {
  const { register, handleSubmit } = useForm();
  const { resetSteps, goToNextStep } = useContext(StepperContext);
  const loginState = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const [checkError] = useErrorResponse();
  const rootEl = useRef(null);

  const onSubmit: SubmitHandler<T> = (data) => {
    queryFunction({ [name]: data[name], sessionHash: loginState.sessionHash } as T);
  };

  useEffect(() => {
    if (isSuccess && name === ConfirmationCode.EMAIL_CODE) {
      return navigate('/home');
    }
    if (isSuccess) {
      return goToNextStep();
    }
  }, [isSuccess]);

  useEffect(() => {
    const onClick = (event) => rootEl.current.contains(event.target) || resetSteps();
    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    checkError(isError, error);
  }, [isError, error]);

  return (
    <ConfirmationContainer ref={rootEl}>
      <ConfirmationFormCode onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">
          <Typography>{title}</Typography>
        </h2>
        <FormTextField {...register(`${name}`)} label={placeholder} variant="outlined" />
        <FormButton type="submit" variant="outlined">
          отправить
        </FormButton>
      </ConfirmationFormCode>
    </ConfirmationContainer>
  );
};

export default Confirmation;
