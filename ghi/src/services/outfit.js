import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outfitApi = createApi({
  reducerPath: "outfitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://fitcheck-api.dec-ct-3.mod3projects.com`,
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
    createRating: builder.mutation({
      query: (body) => {
        return {
          url: `api/outfits/${body.outfit_id}/ratings`,
          method: "POST",
          body: body.rating,
          credentials: "include",
        };
      },
      invalidatesTags: ["Outfits"],
    }),
  }),
});

export const {
    useCreateOutfitMutation,
    useListOutfitQuery,
    useDeleteOutfitMutation,
    useCreateRatingMutation,
} = outfitApi;
