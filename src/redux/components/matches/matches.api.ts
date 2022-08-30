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
  tagTypes: ['GetMatch', 'LikeMatch', 'DislikeMatch', 'GetMatchById'],
  refetchOnFocus: true,
  endpoints: (build) => ({
    getAllMatches: build.query<IMatch[], IAllMatchesRequest>({
      query: (data: IAllMatchesRequest) => ({
        url: `/getMatches`,
        method: 'GET',
        headers: {
          'X-Auth-Token': data.token,
          phoneNumber: data.phoneNumber,
        },
      }),
      providesTags: ['GetMatch'],
    }),
    likeMatch: build.query<string, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `/like/${data.id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': data.token,
        },
      }),
      providesTags: ['LikeMatch'],
    }),
    dislikeMatch: build.query<string, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `/pass/${data.id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': data.token,
        },
      }),
      providesTags: ['DislikeMatch'],
    }),
    getMatchById: build.query<IMatchProfile, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `user/${data.id}`,
        method: 'GET',
        headers: {
          'X-Auth-Token': data.token,
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
        userInterests: response.results.user_interests.selected_interests,
        city: response.results.city,
      }),
    }),
  }),
});

export const {
  useGetAllMatchesQuery,
  useLazyLikeMatchQuery,
  useLazyDislikeMatchQuery,
  useLazyGetAllMatchesQuery,
  useGetMatchByIdQuery,
} = matchesApi;
