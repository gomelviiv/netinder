import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

const ProfileDescriptionContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 9px 0px #cacaca;
  padding: 12px;
  margin-bottom: 12px;
  width: 100%;
  max-width: 42.5rem;

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
