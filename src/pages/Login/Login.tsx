import React, { FC } from 'react';

import { useLazyLoginCodeEmailQuery, useLazyLoginSmsCodeQuery } from '@redux/login/login.api';
import Captcha from '@shared/components/Captcha';
import { ILoginResponseEmailCode, ILoginResponseSmsCode } from '@shared/interface/api/login';

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
          <Captcha<ILoginResponseSmsCode> title="смс" name="smsCode" queryFunction={sendSmsCode} />
        </Step>

        <Step step={2}>
          <Captcha<ILoginResponseEmailCode> title="емаил код" name="emailCode" queryFunction={sendEmailCode} />
        </Step>
      </Stepper>
    </div>
  );
};

export default Login;
