import { Link as LinkReactRouterDom } from 'react-router-dom';

import styled from '@emotion/styled';
import { Card, CardMedia, CardActions as MaterialCardActions, Typography } from '@mui/material';

const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: space-between;

  .MuiCardContent-root {
    padding: 0;
  }
`;

const Link = styled(LinkReactRouterDom)`
  text-decoration: none;
  color: black;

  .MuiCardContent-root {
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardImg = styled(CardMedia)`
  height: 500px;
  background-size: cover;
  width: 100%;
` as typeof CardMedia;

const CardDescription = styled.div`
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

const CardActions = styled(MaterialCardActions)``;

export {
  CardActions,
  CardContainer,
  CardContent,
  CardDescription,
  CardName,
  CardYears,
  CardImg,
  Link,
};
