import { UserCred } from './types';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

export const login = (
  build: EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
    never,
    'api'
  >,
) =>
  build.mutation({
    query: (credentials: UserCred) => ({
      url: '/api/login',
      method: 'POST',
      body: credentials,
    }),
  });


