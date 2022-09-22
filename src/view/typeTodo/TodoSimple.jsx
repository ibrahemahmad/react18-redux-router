import React, { useEffect, useRef, useState } from 'react'
import { getTodo } from '../../actions/todoActions'
import { TodoCards } from '../../components/TodoCards'

export default function TodoSimple() {
  const isLoad = useRef(false)
  const [listTodo, setListTodo] = useState([])
  useEffect(() => {
    if (!isLoad.current) {
      isLoad.current = true
      getTodo('todos')
        .then((data) => {
          setListTodo(data)
        })
        .catch((err) => {
          isLoad.current = false
        })
    }
  }, [])
  return listTodo?.length > 0 ? (
    listTodo
      ?.reverse()
      ?.map((eTodo) => (
        <TodoCards
          title={eTodo?.id}
          discription={eTodo.title}
          isCompleted={eTodo?.completed}
        />
      ))
  ) : (
    <></>
  )
}
