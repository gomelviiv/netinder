import styled from '@emotion/styled';
import { Avatar, Card } from '@mui/material';

const ProfilePreview = styled(Card)`
  display: flex;
  align-items: center;
  width 100%;
  max-width: 800px;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
  padding: 12px;
  margin-bottom: 12px;

  .MuiTypography-root {
    margin-left: 24px;
    font-weight: bold;
  }
`;

const ProfileImg = styled(Avatar)``;

export { ProfilePreview, ProfileImg };
