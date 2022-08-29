import styled from '@emotion/styled';
import { Button } from '@mui/material';

type ButtonProps = {
  bg?: string;
};

const CardButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => (props.bg === 'red' ? 'red' : 'green')};
  color: white;
  width: 200px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.bg === 'red' ? '#bb0707' : '#086208')};
  }
`;

export { CardButton };
