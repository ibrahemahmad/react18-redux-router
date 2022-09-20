import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './../styles/Todos.module.css'

export default function Todo() {
  return (
    <main className={classes.main}>
      <div className="nav nav-fill bg-dark rounded-5 w-50">
        <Link to="/todo" className="nav-item nav-link">
          Todo
        </Link>
        <Link to="/todo/with-thunk" className="nav-item nav-link">
          With Thunk
        </Link>
      </div>
      <br />
      <hr />
      <br />
      <Outlet />
    </main>
  )
}
