import React from 'react'
import { TodoCards } from '../../components/TodoCards'
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation
} from '../../redux/reducers/todoRtkSlice'
import classes from './../../styles/Todos.module.css'
export const WithRtkQuery = () => {
  const {
    data: listTodos,
    error,
    isError,
    isLoading
  } = useGetTodosQuery('todos')
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  let content = <></>
  if (isLoading) {
    content = <p>is Loading</p>
  } else if (isError) {
    content = <p>{error}</p>
  } else if (listTodos?.length > 0) {
    content =
      listTodos?.length > 0 ? (
        listTodos?.map((eTodo) => (
          <TodoCards
            key={eTodo?.id}
            title={eTodo?.id}
            discription={eTodo.title}
            isCompleted={eTodo?.completed}
            onDelete={() => {
              deleteTodo({ urls: 'todos', id: eTodo?.id })
            }}
            onUpdate={(isCheck) => {
              updateTodo({ urls: 'todos', todo:{...eTodo,completed:isCheck} })

            }}
          />
        ))
      ) : (
        <></>
      )
  }
  return (
    <main className={classes.main}>
      <p className="text-body fw-bold">List Todo</p>
      {content}
    </main>
  )
}
