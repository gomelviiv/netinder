import Modal from 'react-modal';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ModalContainer = styled(Modal)`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:focus {
    outline: none;
  }
`;

const ModalFormCode = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 5px 5px 20px #cacaca;
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
