import { combineReducers } from 'redux';

import { errorsReducers } from '@redux/components/errors/errors.slice';
import { loginApi } from '@redux/components/login/login.api';
import { loginReducer } from '@redux/components/login/login.slice';
import { matchesApi } from '@redux/components/matches/matches.api';
import { userApi } from '@redux/components/user/user.api';

const reducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [matchesApi.reducerPath]: matchesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  login: loginReducer,
  errors: errorsReducers,
});

export default reducers;
