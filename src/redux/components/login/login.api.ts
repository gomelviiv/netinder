import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import {
  ILoginEmailResponse,
  ILoginRequestEmailCode,
  ILoginRequestPhoneNumber,
  ILoginRequestSmsCode,
  ILoginResponsePhoneNumber,
} from './__types__';
import { saveSessionHash, saveToken } from './login.slice';

export const loginApi = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.APP_URL || '/',
    credentials: 'include',
  }),
  tagTypes: ['PhoneNumber', 'SmsCode', 'EmailCode'],
  refetchOnFocus: true,
  endpoints: (build) => ({
    loginPhoneNumber: build.query<ILoginResponsePhoneNumber, ILoginRequestPhoneNumber>({
      query: ({ countryCode, phoneNumber }: ILoginRequestPhoneNumber) => ({
        url: `/authByPhone`,
        method: 'PUT',
        body: {
          countryCode: countryCode,
          phoneNumber: phoneNumber,
        },
      }),
      providesTags: ['PhoneNumber'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveSessionHash(data.sessionHash));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    loginSmsCode: build.query<string, ILoginRequestSmsCode>({
      query: ({ sessionHash, smsCode }: ILoginRequestSmsCode) => ({
        url: `/${sessionHash}/smsConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          smsConfirmationCode: `${smsCode}`,
        },
      }),
      providesTags: ['SmsCode'],
    }),
    loginCodeEmail: build.query<ILoginEmailResponse, ILoginRequestEmailCode>({
      query: ({ sessionHash, emailCode }: ILoginRequestEmailCode) => ({
        url: `/${sessionHash}/emailConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          emailConfirmationCode: `${emailCode}`,
        },
      }),
      providesTags: ['EmailCode'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(saveToken(data.tinderWebToken));
        } catch (err) {
          console.log('Error fetching post!', err);
        }
      },
    }),
  }),
});

export const {
  useLazyLoginPhoneNumberQuery,
  useLazyLoginSmsCodeQuery,
  useLazyLoginCodeEmailQuery,
} = loginApi;
