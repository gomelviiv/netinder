import { Link as LinkMaterial } from 'react-router-dom';

import styled from '@emotion/styled';
import { Avatar, Button } from '@mui/material';

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 700px !important;
  display: flex;
  flex-direction: column;
  border-bottom: 1px black solid;
  margin-bottom: 24px;
  padding-bottom: 8px;
`;

const HeaderNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .MuiButtonBase-root {
    color: black;
  }
`;

const Link = styled(LinkMaterial)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;

  .MuiTypography-root {
    margin-left: 8px;
  }
`;

const UserImg = styled(Avatar)``;

const HeaderNavigationButton = styled(Button)`
  .MuiTypography-root {
    margin-left: 8px;
  }
`;

const HeaderRightContent = styled.div`
  display: flex;
  flex-direction: row;

  .MuiAvatar-root {
    margin-right: 12px;
  }
`;

export {
  HeaderNavigation,
  HeaderRightContent,
  HeaderContainer,
  Link,
  HeaderNavigationButton,
  UserImg,
};
