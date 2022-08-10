import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ILoginRequestData, ILoginResponseData, IPhoneCode } from '@shared/interface/api/login';

export const tinderApi = createApi({
  reducerPath: 'tinder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.17.110.23:8080',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    loginUser: build.query<ILoginRequestData, ILoginResponseData>({
      query: (user: ILoginResponseData) => ({
        url: `/authByPhone`,
        method: 'GET',
        headers: {
          PhoneNumber: `${user.phone}`,
        },
      }),
      transformResponse: (response: ILoginRequestData) => response,
    }),
    loginCodePhone: build.query<IPhoneCode, string>({
      query: (phoneCode: string) => ({
        url: `/smsConfirmationByPhone`,
        method: 'PATCH',
        headers: {
          PhoneNumber: `338763343`,
          smsConfirmationCode: `${phoneCode}`,
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

export const { useLazyLoginUserQuery, useLazyLoginCodePhoneQuery } = tinderApi;
