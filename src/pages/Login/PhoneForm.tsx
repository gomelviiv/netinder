import React, { FC, useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Typography } from '@mui/material';
import { ILoginRequestPhoneNumber } from '@redux/components/login/__types__';
import { useLazyLoginPhoneNumberQuery } from '@redux/components/login/login.api';
import { savePhone } from '@redux/components/login/login.slice';
import { useAppDispatch } from '@redux/hooks';
import useErrorResponse from '@shared/hooks/useErrorResponse';
import Spinner from '@shared/layout/Spinner';

import { FormattedPhoneValue } from './__types__';
import { StepperContext } from './Stepper';
import './style';
import { FormButton, FormDiv, FormPhone } from './styles';

const PhoneForm: FC = (): JSX.Element => {
  const { goToNextStep } = useContext(StepperContext);
  const [
    sendPhoneNumber,
    {
      isSuccess: isSuccessPhoneNumber,
      isLoading: isLoadingPhoneNumber,
      isError: isErrorPhoneNumber,
      error: errorPhoneNumber,
    },
  ] = useLazyLoginPhoneNumberQuery();
  const { setValue, handleSubmit, getValues, watch } = useForm<ILoginRequestPhoneNumber>();
  const dispatch = useAppDispatch();
  const [checkError] = useErrorResponse();
  const selectPhoneNumber = watch('phoneNumber');

  const onSubmit: SubmitHandler<ILoginRequestPhoneNumber> = ({ phoneNumber, countryCode }) => {
    const phoneWithoutCountryCode = phoneNumber.slice(countryCode.length);

    dispatch(
      savePhone({ phoneNumber: phoneWithoutCountryCode, countryCode: getValues('countryCode') }),
    );
    sendPhoneNumber({ phoneNumber: phoneWithoutCountryCode, countryCode });
  };

  const handleChange = (phone: string, formattedValue: FormattedPhoneValue) => {
    setValue('phoneNumber', phone);
    setValue('countryCode', formattedValue.dialCode);
  };

  useEffect(() => {
    if (isSuccessPhoneNumber) {
      goToNextStep();
    }
  }, [isSuccessPhoneNumber]);

  useEffect(() => {
    checkError(isErrorPhoneNumber, errorPhoneNumber);
  }, [isErrorPhoneNumber, errorPhoneNumber]);

  return (
    <FormDiv>
      <FormPhone onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">
          <Typography>Введите телефон:</Typography>
        </h2>
        {isLoadingPhoneNumber && <Spinner size={40} />}
        <PhoneInput
          onlyCountries={['by', 'ru']}
          country={'by'}
          value={selectPhoneNumber}
          onChange={(phone: string, formattedValue: FormattedPhoneValue) =>
            handleChange(phone, formattedValue)
          }
        />
        <FormButton type="submit" variant="outlined">
          Отправить
        </FormButton>
      </FormPhone>
    </FormDiv>
  );
};

export default PhoneForm;
