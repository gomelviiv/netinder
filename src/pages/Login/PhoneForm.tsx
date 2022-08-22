import React, { FC, useCallback, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '@mui/material';
import { ILoginResponsePhone } from '@redux/components/login/__types__';
import { useLoginPhoneNumberMutation } from '@redux/components/login/login.api';
import { savePhone } from '@redux/components/login/login.slice';
import { useAppDispatch } from '@redux/hooks';

import { StepperContext } from './Stepper';

const PhoneForm: FC = () => {
  const navigate = useNavigate();
  const { goToNextStep } = useContext(StepperContext);
  const [sendPhoneNumber] = useLoginPhoneNumberMutation();

  const { register, handleSubmit, getValues } = useForm<ILoginResponsePhone>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ILoginResponsePhone> = (data) => {
    handleSubmitPhone(getValues('phoneNumber'));
    sendPhoneNumber(data);

    goToNextStep();
    navigate('/home');
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
