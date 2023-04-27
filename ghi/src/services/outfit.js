import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outfitApi = createApi({
    reducerPath: "outfitApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_FitCheck_API_HOST}`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        createOutfit: builder.mutation({
            query: (body) => {
                return {
                    url: "api/outfits",
                    method: "POST",
                    body: body,
                    credentials: "include",
                };
            },
            invalidatesTags: ["Outfits"],
        }),
        deleteOutfit: builder.mutation({
            query: (body) => {
                return {
                    url: `api/outfits/${body.outfit_id}`,
                    method: "DELETE",
                    credentials: "include",
                };
            },
            invalidatesTags: ["Outfits"],
        }),
        listOutfit: builder.query({
            query: () => "api/outfits",
            transformResponse: (response) => response?.outfits,
            providesTags: ["Outfits"],
        }),
    }),
});

export const {
    useCreateOutfitMutation,
    useListOutfitQuery,
    useDeleteOutfitMutation,
} = outfitApi;
