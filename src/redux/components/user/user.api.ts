import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IUser } from './__types__/user';
import { ITinderResponseUserData } from './__types__/user.tinder.response';

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.APP_URL || '/',
  }),
  refetchOnFocus: true,
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUserInformation: build.query<IUser, string>({
      query: (token: string) => ({
        url: `/profile`,
        method: 'GET',
        headers: {
          'X-Auth-Token': token,
        },
      }),
      providesTags: ['User'],
      transformResponse: (response: ITinderResponseUserData) => ({
        name: response.name,
        email: response.email,
        photo: response.photos[0].url,
      }),
    }),
  }),
});

export const { useGetUserInformationQuery } = userApi;
