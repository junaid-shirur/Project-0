import { UserCred } from "./types";
import { api } from '../../api';


export const login = (build: any) => build.mutation({
    query: (credentials: UserCred) => ({
      url: '/login',
      method: 'POST',
      body: credentials,
    }),
  });
  




export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: login(build),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
