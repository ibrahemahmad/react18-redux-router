import React from 'react'
import { useState } from 'react'
import classes from './../styles/Todos.module.css'
export const TodoCards = ({
  title = '',
  id,
  discription,
  isCompleted = false
}) => {
  const [isComplete, setIsComplete] = useState(isCompleted)
  return (
    <div className={classes.cardTodo}>
      <div className={classes.title}>{title}</div>
      <div className={classes.discription}>{discription}</div>

      <input
        className={classes.check_box_style}
        type="checkbox"
        checked={isComplete}
        onChange={(event)=>setIsComplete(event.target.checked)}
      />
    </div>
  )
}
