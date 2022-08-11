import React, { FC, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import { Button, TextField } from '@mui/material';
import { StepperContext } from '@pages/Login/Stepper';
import { useAppSelector } from '@redux/hooks';
import { ITinderProfile } from '@redux/login/__types__';

import { LoginName } from './__types__';

interface Props {
  title: string;
  queryFunction: (profile: ITinderProfile) => void;
  name: LoginName;
}

const Captcha: FC<Props> = ({ title, name, queryFunction }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, handleSubmit } = useForm<ITinderProfile>();
  const tinderProfile = useAppSelector((state) => state.tinderProfile);
  const { resetSteps, goToNextStep } = useContext(StepperContext);

  const closeModal = () => {
    resetSteps();
  };

  const onSubmit: SubmitHandler<ITinderProfile> = (data) => {
    queryFunction({ [name]: data[name], phoneNumber: tinderProfile.phoneNumber });
    setIsOpen(false);
    goToNextStep();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false} contentLabel="Example Modal">
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

export default Captcha;
