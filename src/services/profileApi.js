import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image,
        },
      }),
    }),
  }),
});

export const { useGetProfileImageQuery, usePostProfileImageMutation } =
  profileApi;
