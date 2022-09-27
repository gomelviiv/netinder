import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import {
  IAllMatchesRequest,
  IMatch,
  IMatchActionRequest,
  IMatchProfile,
} from './__types__/matches';
import { ITinderResponseMatchProfile } from './__types__/matches.tinder.response';

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.APP_URL || '/',
  }),
  tagTypes: ['GetMatch', 'GetMatchById'],
  refetchOnFocus: true,
  endpoints: (build) => ({
    getAllMatches: build.query<IMatch[], IAllMatchesRequest>({
      query: ({ phoneNumber, token }: IAllMatchesRequest) => ({
        url: `/getMatches`,
        method: 'GET',
        headers: {
          'X-Auth-Token': token,
          phoneNumber: phoneNumber.phoneNumber,
          countryCode: phoneNumber.countryCode,
        },
      }),
      providesTags: (result: IMatch[] | undefined) =>
        result
          ? [...result.map(({ name }) => ({ type: 'GetMatch' as const, name })), 'GetMatch']
          : ['GetMatch'],
    }),
    likeMatch: build.mutation<string, IMatchActionRequest>({
      query: ({ token, id }: IMatchActionRequest) => ({
        url: `/like/${id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': token,
        },
      }),
      invalidatesTags: ['GetMatch'],
    }),
    dislikeMatch: build.mutation<string, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `/pass/${data.id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': data.token,
        },
      }),
      invalidatesTags: ['GetMatch'],
    }),
    getMatchById: build.query<IMatchProfile, IMatchActionRequest>({
      query: ({ token, id }: IMatchActionRequest) => ({
        url: `user/${id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': token,
        },
      }),

      providesTags: ['GetMatchById'],
      transformResponse: (response: ITinderResponseMatchProfile) => ({
        name: response.results.name,
        bio: response.results.bio,
        birthDate: response.results.birth_date,
        jobs: response.results.jobs,
        schools: response.results.schools,
        photos: response.results.photos,
        userInterests: response.results.user_interests?.selected_interests || [],
        city: response.results.city,
      }),
    }),
  }),
});

export const {
  useGetAllMatchesQuery,
  useLazyGetAllMatchesQuery,
  useGetMatchByIdQuery,
  useDislikeMatchMutation,
  useLikeMatchMutation,
} = matchesApi;
