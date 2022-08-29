import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLazyGetAllMatchesQuery } from '@redux/components/matches/matches.api';

const useActionsWithProfile = (RTKHook, { token, phoneNumber }) => {
  const [getMatches, { isSuccess: isSuccessMatch, isError: isErrorMatch, error: errorMatch }] =
    useLazyGetAllMatchesQuery();
  const navigate = useNavigate();
  const [functionAction, { isSuccess, isError, error }] = RTKHook();

  const action = ({ id, token, phoneNumber }) => {
    functionAction({ id, token, phoneNumber });
    console.log({ id, token, phoneNumber });
  };

  useEffect(() => {
    if (isSuccess) {
      getMatches({ phoneNumber, token });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessMatch) {
      navigate('/home');
    }
  }, [isSuccessMatch]);

  return [action, error, isError, isErrorMatch, errorMatch];
};

export default useActionsWithProfile;
