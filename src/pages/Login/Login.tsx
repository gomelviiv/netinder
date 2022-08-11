import React, { FC } from 'react';

import { ILoginResponseEmailCode, ILoginResponseSmsCode } from '@redux/login/__types__';
import { useLazyLoginCodeEmailQuery, useLazyLoginSmsCodeQuery } from '@redux/login/login.api';
import Confirmation from '@shared/components/modals/Confirmation';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';

import PhoneForm from './PhoneForm';
import Stepper, { Step } from './Stepper';

const Login: FC = () => {
  const [sendSmsCode] = useLazyLoginSmsCodeQuery();
  const [sendEmailCode] = useLazyLoginCodeEmailQuery();

  return (
    <div>
      <Stepper>
        <Step step={0}>
          <PhoneForm />
        </Step>

        <Step step={1}>
          <Confirmation<ILoginResponseSmsCode>
            title="смс"
            name={ConfirmationCode.SMS_CODE}
            queryFunction={sendSmsCode}
          />
        </Step>

        <Step step={2}>
          <Confirmation<ILoginResponseEmailCode>
            title="емаил код"
            name={ConfirmationCode.EMAIL_CODE}
            queryFunction={sendEmailCode}
          />
        </Step>
      </Stepper>
    </div>
  );
};

export default Login;
