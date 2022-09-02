import styled from '@emotion/styled';
import { Card } from '@mui/material';

const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InterestsCard = styled(Card)`
  margin-right: 12px;
  padding: 4px;
  background: #ede3e369;
  -webkit-box-shadow: 7px 8px 12px -1px #efeaea;
  -moz-box-shadow: 7px 8px 12px -1px #efeaea;
  box-shadow: 7px 8px 12px -1px #efeaea;
`;

export { InterestsCard, InterestsContainer };
