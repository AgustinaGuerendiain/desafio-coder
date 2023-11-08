import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, apiKey } from "../firebase";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getTasks: builder.query({
      query: localId => `tasks/${localId}.json`,
    }),
    addTask: builder.mutation({
      query: ({ localId, task }) => ({
        url: `tasks/${localId}.json?key=${apiKey}`,
        method: "POST",
        body: task,
      }),
    }),
    deleteTask: builder.mutation({
      query: ({ localId, taskId }) => ({
        url: `tasks/${localId}/${taskId}.json?key=${apiKey}`,
        method: "DELETE",
      }),
    }),
    toggleIsComplete: builder.mutation({
      query: ({ localId, taskId, isComplete }) => ({
        url: `tasks/${localId}/${taskId}.json?key=${apiKey}`,
        method: "PATCH",
        body: { isComplete },
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useToggleIsCompleteMutation,
} = tasksApi;
