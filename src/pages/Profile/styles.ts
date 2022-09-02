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
  margin-top: 24px;

  .MuiButtonBase-root:first-of-type {
    margin-right: 24px;
  }

  .MuiSkeleton-rectangular {
    margin-right: 24px;
  }
`;

export { ProfileContainer, ProfileActionsContainer };
