import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

const ProfileDescriptionContainer = styled(Card)`
  display: flex;
  width 100%;
  max-width: 500px;
  flex-direction: column;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
  padding: 12px;
  margin-bottom: 12px;

  .MuiTypography-root {
    display: flex;
    align-items: center;
 
  }
`;

const ProfileDescriptionField = styled(Typography)`
  padding: 4px 12px;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;

  .MuiSvgIcon-root {
    margin-right: 8px;
  }
`;

export { ProfileDescriptionContainer, ProfileDescriptionField };
