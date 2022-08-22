import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import { Button, TextField } from '@mui/material';
import { StepperContext } from '@pages/Login/Stepper';
import { useAppSelector } from '@redux/hooks';
import { ConfirmationCode } from '@shared/enum/confirmationCode.enum';

interface Props<T> {
  title: string;
  queryFunction: (data: T) => void;
  name: ConfirmationCode;
}

const Confirmation = <T extends { phoneNumber: string }>({ title, name, queryFunction }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, handleSubmit } = useForm();
  const { resetSteps, goToNextStep } = useContext(StepperContext);
  const loginState = useAppSelector((state) => state.login);

  const closeModal = () => {
    resetSteps();
  };

  const onSubmit: SubmitHandler<T> = (data) => {
    queryFunction({ [name]: data[name], phoneNumber: loginState.phoneNumber } as T);
    setIsOpen(false);
    goToNextStep();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="login Modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="p-2">{title}</h2>
        <TextField {...register(`${name}`)} label={title} variant="outlined" />
        <Button type="submit" variant="outlined">
          отправить
        </Button>
      </form>
    </Modal>
  );
};

export default Confirmation;
