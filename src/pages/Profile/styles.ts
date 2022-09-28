import styled from '@emotion/styled';

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 12px 0 0 0;

  .MuiButtonBase-root:first-of-type {
    margin-right: 24px;
  }

  .MuiSkeleton-rectangular {
    margin-right: 24px;
  }
`;

export { ProfileContainer, ProfileActionsContainer };
