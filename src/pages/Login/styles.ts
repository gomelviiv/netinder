import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const FormDiv = styled.div`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormPhone = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  padding: 24px;
  background: white;
  box-shadow: 0px 0px 20px 3px #cacaca;
`;

const FormButton = styled(Button)`
  color: black;
  border: 1px solid #cacaca;

  &:hover {
    border: 1px solid gray;
  }
`;

export { FormPhone, FormDiv, FormButton };
