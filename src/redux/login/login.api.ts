import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ILoginRequestData, ILoginResponseData } from '@shared/interface/api/login';

export const tinderApi = createApi({
  reducerPath: 'tinder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.gotinder.com',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    loginUser: build.mutation<ILoginRequestData, ILoginResponseData>({
      query: (userPhone: ILoginResponseData) => ({
        url: `/v3/auth/login`,
        method: 'POST',
        params: {
          auth_type: `sms`,
        },
        body: `$\\n\\r\\n\\u000b${userPhone.phone}`,
      }),
      transformResponse: (response: ILoginRequestData) => response,
    }),
  }),
});

export const { useLoginUserMutation } = tinderApi;
