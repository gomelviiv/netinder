import React, { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, TextField } from '@mui/material';
import { ILoginRequestPhoneNumber } from '@redux/components/login/__types__';
import { useLazyLoginPhoneNumberQuery } from '@redux/components/login/login.api';
import { savePhone } from '@redux/components/login/login.slice';
import { useAppDispatch } from '@redux/hooks';
import Alert from '@shared/components/Alert';
import usePosition from '@shared/hooks/usePosition';

import { StepperContext } from './Stepper';

const PhoneForm: FC = (): JSX.Element => {
  const { goToNextStep } = useContext(StepperContext);
  const [sendPhoneNumber, { isSuccess, isError: isErrorPhoneNumber, error: errorPhoneNumber }] =
    useLazyLoginPhoneNumberQuery();
  const { error, ...position } = usePosition();

  const { register, handleSubmit, getValues } = useForm<ILoginRequestPhoneNumber>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ILoginRequestPhoneNumber> = (data) => {
    if (error) {
      return;
    }

    dispatch(savePhone(getValues('phoneNumber')));
    sendPhoneNumber({ phoneNumber: data.phoneNumber, position });
  };

  useEffect(() => {
    if (isSuccess) {
      goToNextStep();
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isErrorPhoneNumber && <Alert error={errorPhoneNumber} />}
      {!!error && <Alert error={error} />}

      <h2 className="p-2">Введите телефон:</h2>
      <TextField {...register('phoneNumber')} label="phone...." variant="outlined" />
      <Button type="submit" variant="outlined">
        отправить
      </Button>
    </form>
  );
};

export default PhoneForm;
