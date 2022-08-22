import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ILoginResponseEmailCode, ILoginResponsePhone, ILoginResponseSmsCode } from './__types__';
import { saveToken } from './login.slice';

export const loginApi = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.17.110.23:8080',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    loginPhoneNumber: build.mutation<{ tinderWebToken: string }, ILoginResponsePhone>({
      query: (data: ILoginResponsePhone) => ({
        url: `/authByPhone`,
        method: 'GET',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        console.log('Fetching post...');
        try {
          const { data } = await queryFulfilled;
          dispatch(saveToken(data.tinderWebToken));
        } catch (err) {
          console.log('Error fetching post!');
        }
      },
    }),
    loginSmsCode: build.query<string, ILoginResponseSmsCode>({
      query: (data: ILoginResponseSmsCode) => ({
        url: `/smsConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
          smsConfirmationCode: `${data.smsCode}`,
        },
      }),
    }),
    loginCodeEmail: build.query<string, ILoginResponseEmailCode>({
      query: (data: ILoginResponseEmailCode) => ({
        url: `/emailConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
          emailConfirmationCode: `${data.emailCode}`,
        },
      }),
    }),
  }),
});

export const { useLoginPhoneNumberMutation, useLazyLoginSmsCodeQuery, useLazyLoginCodeEmailQuery } = loginApi;
