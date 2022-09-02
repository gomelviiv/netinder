import React, { FC } from 'react';

import { ILoginRequestEmailCode, ILoginRequestSmsCode } from '@redux/components/login/__types__';
import {
  useLazyLoginCodeEmailQuery,
  useLazyLoginSmsCodeQuery,
} from '@redux/components/login/login.api';
import Confirmation from '@shared/components/modals/Confirmation';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';

import PhoneForm from './PhoneForm';
import Stepper, { Step } from './Stepper';

const Login: FC = () => {
  const [
    sendSmsCode,
    { error: smsCodeError, isError: isSmsCodeError, isSuccess: isSuccessSmsCode },
  ] = useLazyLoginSmsCodeQuery();
  const [
    sendEmailCode,
    { error: emailCodeError, isError: isEmailCodeError, isSuccess: isSuccessEmailCode },
  ] = useLazyLoginCodeEmailQuery();

  return (
    <Stepper>
      <Step step={0}>
        <PhoneForm />
      </Step>

      <Step step={1}>
        <Confirmation<ILoginRequestSmsCode>
          title="смс"
          name={ConfirmationCode.SMS_CODE}
          queryFunction={sendSmsCode}
          error={smsCodeError}
          isError={isSmsCodeError}
          isSuccess={isSuccessSmsCode}
        />
      </Step>

      <Step step={2}>
        <Confirmation<ILoginRequestEmailCode>
          title="емаил код"
          name={ConfirmationCode.EMAIL_CODE}
          queryFunction={sendEmailCode}
          error={emailCodeError}
          isError={isEmailCodeError}
          isSuccess={isSuccessEmailCode}
        />
      </Step>
    </Stepper>
  );
};

export default Login;
