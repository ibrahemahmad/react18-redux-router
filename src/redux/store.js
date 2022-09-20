import { configureStore } from '@reduxjs/toolkit'
import countSlice from './reducers/countSlice'
import { todosApi } from './reducers/todoRtkSlice'
import todoSlice from './reducers/todoSlice'
import useReducer from './reducers/userReducer'
import { setupListeners } from '@reduxjs/toolkit/query'
const store = configureStore({
  reducer: {
    user: useReducer,
    count: countSlice,
    todos: todoSlice,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([todosApi.middleware])
})
export default store

setupListeners(store.dispatch)
