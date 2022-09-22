import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import classes from './../styles/Todos.module.css'

export default function Todo() {

  return (
    <div className='m-5'>
      <div
        className={[
          'nav nav-fill bg-dark rounded-5 w-100 sticky-top ',
          classes.nav_space
        ].join(' ')}>
        <Link to="/todo" className="nav-item nav-link">
          Todo
        </Link>
        <Link to="/todo/with-thunk" className="nav-item nav-link">
          With Thunk
        </Link>
        <Link to="/todo/with-RtkQuery" className="nav-item nav-link">
          With RTK Query
        </Link>
      </div>
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  )
}
