import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './view/homePage'
import AboutPage from './view/aboutPage'
import More from './view/more'
import Invoices from './view/invoice'
import Salary from './view/salary'
import SingleInvoice from './view/singleInvoice'
import Todo from './view/todo'
import WithThunk from './view/typeTodo/WithThunk'
import TodoSimple from './view/typeTodo/TodoSimple'
import { NotFound } from './view/notFound'
import { WithRtkQuery } from './view/typeTodo/WithRtkQuery'
import React from 'react'
function App() {
  let invoices = [
    {
      name: 'Santa Monica',
      number: 1995,
      amount: '$10,800',
      due: '12/05/1995'
    },
    {
      name: 'Stankonia',
      number: 2000,
      amount: '$8,000',
      due: '10/31/2000'
    },
    {
      name: 'Ocean Avenue',
      number: 2003,
      amount: '$9,500',
      due: '07/22/2003'
    },
    {
      name: 'Tubthumper',
      number: 1997,
      amount: '$14,000',
      due: '09/01/1997'
    },
    {
      name: 'Wide Open Spaces',
      number: 1998,
      amount: '$4,600',
      due: '01/27/1998'
    }
  ]
  return (
    <div>
      <div className="nav nav-fill bg-dark sticky-top">
        <Link to="/todo" className="nav-item nav-link">
          Todo
        </Link>
        <Link to="/" className="nav-item nav-link">
          Home
        </Link>
        <Link to="/salary" className="nav-item nav-link">
          Salary
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage invoices={invoices} />} />
        <Route path="salary" element={<Salary />}>
          <Route path="invoices" element={<Invoices invoices={invoices} />}>
            <Route path=":id" element={<SingleInvoice invoices={invoices} />} />
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoices</p>
                </main>
              }
            />
          </Route>
          <Route path="more" element={<More />} />
          <Route path="*" element={<NotFound />} />
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an tab</p>
              </main>
            }
          />
        </Route>
        <Route path="todo" element={<Todo />}>
          <Route index element={<TodoSimple />} />
          <Route path="with-thunk" element={<WithThunk />} />
          <Route path="with-RtkQuery" element={<WithRtkQuery />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="about/:id" element={<AboutPage id={'nothing'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
