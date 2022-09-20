import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoCards } from '../../components/TodoCards'
import { constats } from '../../config/constant'
import classes from './../../styles/Todos.module.css'
import {
  fetchTodos,
  getAllTodos,
  getTodoError,
  getTodoStatus
} from '../../redux/reducers/todoSlice'

export default function WithThunk() {
  const todoStatus = useSelector(getTodoStatus)
  const todoError = useSelector(getTodoError)
  const listTodos = useSelector(getAllTodos)
  const dispatch = useDispatch()
  useEffect(() => {
    if (todoStatus === constats.idle) {
      dispatch(fetchTodos('todos')).unwrap()
    }
  }, [todoStatus, dispatch])
  let content = <></>
  if (todoStatus === constats.loading) {
    content = <div>is Loading!</div>
  } else if (todoStatus === constats.success) {
    content =
      listTodos?.length > 0 ? (
        listTodos
          .slice(0, 50)
          .reverse()
          ?.map((eTodo) => (
            <TodoCards
              key={eTodo?.id}
              title={eTodo?.id}
              discription={eTodo.title}
              isCompleted={eTodo?.completed}
            />
          ))
      ) : (
        <></>
      )
  } else if (todoStatus === constats.rejected) {
    content = <p>{todoError}</p>
  }
  return (
    <main className={classes.main}>
      <p className="text-body fw-bold">List Todo</p>
      {content}
    </main>
  )
}
