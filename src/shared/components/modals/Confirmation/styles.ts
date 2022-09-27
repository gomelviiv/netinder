import Modal from 'react-modal';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ModalContainer = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus {
    outline: none;
  }
`;

const ModalFormCode = styled.form`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0px 0px 20px 3px #cacaca;
`;

const FormTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

const FormButton = styled(Button)`
  color: black;
  border: 1px solid #cacaca;

  &:hover {
    border: 1px solid gray;
  }
`;

export { ModalContainer, ModalFormCode, FormButton, FormTextField };
