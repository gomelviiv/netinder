import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardMedia,
  CardActions as MaterialCardActions, //   CardContent as MaterialCardContent,
  Typography,
} from '@mui/material';

type ButtonProps = {
  bg?: string;
};

const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 600px;
  max-width: 400px;
  justify-content: space-between;

  .MuiCardContent-root {
    padding: 0;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 550px;
`;

const CardImg = styled(CardMedia)`
  height: 450px;
  width: 100%;
` as typeof CardMedia;

const CardDescription = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CardName = styled(Typography)`
  font-size: 2rem;
`;
const CardYears = styled(Typography)`
  font-size: 2rem;
  margin-left: 1rem;
`;

const CardActions = styled(MaterialCardActions)`
  height: 50px;
`;

const CardButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => (props.bg === 'red' ? 'red' : 'green')};
  color: white;
  width: 200px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.bg === 'red' ? '#bb0707' : '#086208')};
  }
`;

export { CardActions, CardContainer, CardContent, CardDescription, CardName, CardYears, CardImg, CardButton };
