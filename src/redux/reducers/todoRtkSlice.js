import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500/'
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (type) => `${type}`,
      providesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: ({ urls, id }) => ({
        url: `${urls}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todos']
    }),
    updateTodo: builder.mutation({
      query: ({ urls, todo }) => ({
        url: `${urls}/${todo.id}`,
        method: 'PATCH',
        body: todo
      }),
      invalidatesTags: ['Todos']
    })
  })
})

export const { useGetTodosQuery, useDeleteTodoMutation,useUpdateTodoMutation } = todosApi
