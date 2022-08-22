import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { loginApi } from '@redux/components/login/login.api';
import { matchesApi } from '@redux/components/matches/matches.api';
import { userApi } from '@redux/components/user/user.api';

const setMiddleware = () => {
  return (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(loginApi.middleware)
      .concat(matchesApi.middleware)
      .concat(userApi.middleware);
};

export default setMiddleware;
