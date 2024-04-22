import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { basePath } from '../apiRoutes'
 
export const api = createApi({

    baseQuery: fetchBaseQuery({
        
        baseUrl: basePath,
        prepareHeaders: async (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include',
    }),
    tagTypes:["cart","address","inventory","category"],
    endpoints: () => ({}),
    reducerPath: 'api',
   
})
