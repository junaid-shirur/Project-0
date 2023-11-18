import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { MMKV } from 'react-native-mmkv';

let storage = new MMKV();
const baseQuery: any = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  prepareHeaders: headers => {
    const token:any = storage.getString('tokens');
    if (token) {
      headers.set('authorization', `Bearer ${JSON.parse(token).access_token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('BASEQUERY----->', result);
  if (result.data) {
    if (result.data.access_token) {
      storage.set('tokens', JSON.stringify(result.data));
    }
  }
  if (result.error && result.error.status === 401) {
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
