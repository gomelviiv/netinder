import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Captcha from '@shared/components/Captcha';
import { ILoginResponseData } from '@shared/interface/api/login';

interface Props {
  loginUser: (user: ILoginResponseData) => void;
  isError: boolean;
  isLoading: boolean;
}

const Login: FC<Props> = ({ loginUser }) => {
  const { register, handleSubmit } = useForm<ILoginResponseData>();
  const onSubmit: SubmitHandler<ILoginResponseData> = (data) => loginUser(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">Форма входа</h2>
        <input {...register('phone')} />
        <button type="submit">отправить</button>
      </form>
      {true && <Captcha isOpen={true} />}
    </div>
  );
};

export default Login;
