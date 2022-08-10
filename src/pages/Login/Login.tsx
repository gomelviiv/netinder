import React, { FC, memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from '@redux/hooks';
import { useLazyLoginUserQuery } from '@redux/login/login.api';
import { savePhone } from '@redux/login/login.slice';
import Captcha from '@shared/components/Captcha';
import { ILoginResponseData } from '@shared/interface/api/login';

const Login: FC = () => {
  const [captcha, setCaptcha] = useState(false);
  const { register, handleSubmit, getValues } = useForm<ILoginResponseData>();
  const [loginUser] = useLazyLoginUserQuery();
  const dispatch = useAppDispatch();

  const handleSubmitPhone = useCallback((phone: string) => dispatch(savePhone(phone)), [dispatch]);

  const onSubmit: SubmitHandler<ILoginResponseData> = (data) => loginUser(data);

  const handleSubmitForm = () => {
    setCaptcha((v) => !v);
    handleSubmitPhone(getValues('phone'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">Форма входа</h2>
        <input {...register('phone')} />
        <button onClick={handleSubmitForm}>отправить</button>
      </form>
      {captcha && <Captcha captcha={captcha} setCaptcha={setCaptcha} />}
    </div>
  );
};

export default memo(Login);
