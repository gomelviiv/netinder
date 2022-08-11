import React, { FC, useCallback, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '@redux/hooks';
import { ILoginResponsePhone } from '@redux/login/__types__';
import { useLazyLoginPhoneNumberQuery } from '@redux/login/login.api';
import { savePhone } from '@redux/login/login.slice';

import { StepperContext } from './Stepper';

const PhoneForm: FC = () => {
  const { goToNextStep } = useContext(StepperContext);
  const [sendPhoneNumber] = useLazyLoginPhoneNumberQuery();
  const { register, handleSubmit, getValues } = useForm<ILoginResponsePhone>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ILoginResponsePhone> = (data) => {
    handleSubmitPhone(getValues('phoneNumber'));
    sendPhoneNumber(data);
    goToNextStep();
  };

  const handleSubmitPhone = useCallback((phone: string) => dispatch(savePhone(phone)), [dispatch]);
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
