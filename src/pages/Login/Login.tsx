import React, { FC } from 'react';

import { ILoginRequestEmailCode, ILoginRequestSmsCode } from '@redux/components/login/__types__';
import {
  useLazyLoginCodeEmailQuery,
  useLazyLoginSmsCodeQuery,
} from '@redux/components/login/login.api';
import Confirmation from '@shared/components/Confirmation';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';

import { LoginEmail, LoginSms } from './__constants__';
import PhoneForm from './PhoneForm';
import Stepper, { Step } from './Stepper';

const Login: FC = () => {
  const [
    sendSmsCode,
    {
      error: smsCodeError,
      isLoading: isLoadingSmsCode,
      isError: isSmsCodeError,
      isSuccess: isSuccessSmsCode,
    },
  ] = useLazyLoginSmsCodeQuery();
  const [
    sendEmailCode,
    {
      error: emailCodeError,
      isLoading: isLoadingEmailCode,
      isError: isEmailCodeError,
      isSuccess: isSuccessEmailCode,
    },
  ] = useLazyLoginCodeEmailQuery();

  return (
    <Stepper>
      <Step step={0}>
        <PhoneForm />
      </Step>

      <Step step={1}>
        <Confirmation<ILoginRequestSmsCode>
          title={LoginSms.title}
          placeholder={LoginSms.placeholder}
          name={ConfirmationCode.SMS_CODE}
          queryFunction={sendSmsCode}
          error={smsCodeError}
          isError={isSmsCodeError}
          isSuccess={isSuccessSmsCode}
          isLoading={isLoadingSmsCode}
        />
      </Step>

      <Step step={2}>
        <Confirmation<ILoginRequestEmailCode>
          title={LoginEmail.title}
          placeholder={LoginEmail.placeholder}
          name={ConfirmationCode.EMAIL_CODE}
          queryFunction={sendEmailCode}
          error={emailCodeError}
          isError={isEmailCodeError}
          isSuccess={isSuccessEmailCode}
          isLoading={isLoadingEmailCode}
        />
      </Step>
    </Stepper>
  );
};

export default Login;
