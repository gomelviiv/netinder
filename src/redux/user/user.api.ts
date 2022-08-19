import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IUser } from './__types__/user';
import { ITinderResponseUserData } from './__types__/user.tinder.response';

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.17.110.23:8080',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    getUserInformation: build.query<IUser, string>({
      query: (token: string) => ({
        url: `/profile`,
        method: 'GET',
        headers: {
          token,
        },
      }),
      transformResponse: (response: ITinderResponseUserData) => ({
        name: response.name,
        email: response.email,
        photo: response.photos[0].url,
      }),
    }),
  }),
});

export const { useGetUserInformationQuery } = userApi;