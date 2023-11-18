import { api } from '../../api';


export const getServicesApi = api.injectEndpoints({
    endpoints: build => ({
      getServices: build.query<any, void>({
        query: () => `/api/services`,
      }),
    }),
    overrideExisting: false,
  });
  
  export const { useLazyGetServicesQuery } = getServicesApi;