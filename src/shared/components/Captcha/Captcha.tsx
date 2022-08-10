import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import { useLazyLoginCodePhoneQuery } from '@redux/login/login.api';
import { IPhoneCode } from '@shared/interface/api/login';

interface Props {
  captcha: boolean;
  setCaptcha: (value: boolean) => void;
}

const Captcha: FC<Props> = ({ captcha, setCaptcha }) => {
  const { register, handleSubmit } = useForm<IPhoneCode>();
  const [sendCodePhone] = useLazyLoginCodePhoneQuery();
  useEffect(() => {
    setCaptcha(captcha);
  }, [captcha, setCaptcha]);

  const closeModal = () => {
    setCaptcha(false);
  };

  const onSubmit: SubmitHandler<IPhoneCode> = (data) => sendCodePhone(data.codePhone);
  return (
    <Modal isOpen={captcha} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Example Modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">Форма входа</h2>
        <input {...register('codePhone')} />
        <button type="submit">отправить</button>
      </form>
    </Modal>
  );
};

export default Captcha;
