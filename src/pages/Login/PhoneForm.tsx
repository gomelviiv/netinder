import React, { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, TextField } from '@mui/material';
import { ILoginRequestPhoneNumber } from '@redux/components/login/__types__';
import { useLazyLoginPhoneNumberQuery } from '@redux/components/login/login.api';
import { savePhone } from '@redux/components/login/login.slice';
import { useAppDispatch } from '@redux/hooks';
import useErrorResponse from '@shared/hooks/useErrorResponse';

import { StepperContext } from './Stepper';

const PhoneForm: FC = (): JSX.Element => {
  const { goToNextStep } = useContext(StepperContext);
  const [sendPhoneNumber, { isSuccess, isError: isErrorPhoneNumber, error: errorPhoneNumber }] =
    useLazyLoginPhoneNumberQuery();
  const { register, handleSubmit, getValues } = useForm<ILoginRequestPhoneNumber>();
  const dispatch = useAppDispatch();
  const [checkError] = useErrorResponse();

  const onSubmit: SubmitHandler<ILoginRequestPhoneNumber> = (data) => {
  

    dispatch(savePhone(getValues('phoneNumber')));
    sendPhoneNumber({ phoneNumber: data.phoneNumber });
  };

  useEffect(() => {
    if (isSuccess) {
      goToNextStep();
    }
  }, [isSuccess]);

  useEffect(() => {
    checkError(isErrorPhoneNumber, errorPhoneNumber);
  }, [isErrorPhoneNumber, errorPhoneNumber]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="p-2">Введите телефон:</h2>
      <TextField {...register('phoneNumber')} label="phone...." variant="outlined" />
      <Button type="submit" variant="outlined">
        отправить
      </Button>
    </form>
  );
};

export default PhoneForm;
