import styled from '@emotion/styled';
import { Avatar, Typography } from '@mui/material';

const UserArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  .MuiButtonBase-root {
    margin-left: 64px;
    color: black;
  }
`;

const BaseInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .MuiPaper-root {
    margin: 12px;
  }
`;

const UserImg = styled(Avatar)``;
const UserTextField = styled(Typography)`
  margin-left: 1rem;
  font-size: 22px;
`;

export { UserArticle, UserInformation, BaseInformation, UserImg, UserTextField, CardsContainer };
