import { ILoginInformation } from '../__types__';

const initialState: ILoginInformation = {
  phoneNumber: null,
  smsCode: null,
  emailCode: null,
  token: null,
  sessionHash: null,
};

export { initialState };
