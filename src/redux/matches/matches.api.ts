import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IAllMatchesRequest, IMatch, IMatchActionRequest, IMatchProfile } from './__types__/matches';
import { ITinderResponseMatchProfile } from './__types__/matches.tinder.response';

export const matchesApi = createApi({
  reducerPath: 'matches/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.17.110.23:8080',
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    getAllMatches: build.query<IMatch[], IAllMatchesRequest>({
      query: (data: IAllMatchesRequest) => ({
        url: `/getMatches`,
        method: 'GET',
        headers: {
          token: data.token,
          phoneNumber: data.phoneNumber,
        },
      }),
    }),
    likeMatch: build.query<string, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `/url2/like/${data.id}`,
        method: 'GET',
        headers: {
          token: data.token,
        },
      }),
    }),
    dislikeMatch: build.query<string, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `/url2`,
        method: 'GET',
        headers: {
          token: data.token,
        },
      }),
    }),
    getMatchById: build.query<IMatchProfile, IMatchActionRequest>({
      query: (data: IMatchActionRequest) => ({
        url: `url/${data.id}`,
        method: 'GET',
        headers: {
          token: data.token,
        },
      }),
      transformResponse: (response: ITinderResponseMatchProfile) => ({
        name: response.results.name,
        bio: response.results.bio,
        birthDate: response.results.birth_date,
        jobs: response.results.jobs,
        schools: response.results.schools,
        photos: response.results.photos,
        userInterests: response.results.user_interests,
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
