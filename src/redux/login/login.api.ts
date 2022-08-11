import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { ITinderProfile } from './__types__';

export const tinderApi = createApi({
  reducerPath: 'tinder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.17.110.23:8080',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    loginPhoneNumber: build.query<string, ITinderProfile>({
      query: (data: ITinderProfile) => ({
        url: `/authByPhone`,
        method: 'GET',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
        },
      }),
      // transformResponse: (response: ILoginRequestData) => response,
    }),
    loginSmsCode: build.query<string, ITinderProfile>({
      query: (data: ITinderProfile) => ({
        url: `/smsConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
          smsConfirmationCode: `${data.smsCode}`,
        },
      }),
    }),
    loginCodeEmail: build.query<string, ITinderProfile>({
      query: (data: ITinderProfile) => ({
        url: `/emailConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          PhoneNumber: `${data.phoneNumber}`,
          emailConfirmationCode: `${data.emailCode}`,
        },
      }),
    }),
    // getMatches: build.query<any, any>({
    //   query: (userToken: any) => ({
    //     url: `smsConfirmationByPhone`,
    //     method: 'GET',
    //     params: {
    //       token: `${userToken}`,
    //     },
    //   }),
    //   transformResponse: (response: ILoginRequestData) => response,
    // }),
  }),
});

export const { useLazyLoginPhoneNumberQuery, useLazyLoginSmsCodeQuery, useLazyLoginCodeEmailQuery } = tinderApi;
