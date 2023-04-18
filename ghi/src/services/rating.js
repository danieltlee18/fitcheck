import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ratingApi = createApi({
  reducerPath: "ratingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_FitCheck_API_HOST}`,
    credentials: "include", // sends cookie to FastAPI
  }),
  endpoints: (builder) => ({
    createRating: builder.mutation({
      query: (body) => {
        return {
          url: `api/outfits/${body.outfit_id}/ratings`,
          method: "POST",
          body: body.rating,
          credentials: "include",
        };
      },
      // invalidateTags: ["Outfits"],
    }),
  }),
});

export const { useCreateRatingMutation } = ratingApi;
