import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
// import { act } from 'react-dom/test-utils'
import { constats } from '../../config/constant'
import { axiosGet } from '../../config/globalAxios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (type) => {
  try {
    const response = await axiosGet({
      url: `https://jsonplaceholder.typicode.com/${type}`
    })
    return [...response]
  } catch (error) {
    return error.message
  }
})
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    counts: [],
    status: constats.idle,
    error: ''
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementCount: {
      //ONLY FOR TEST :// this way for change anything in payload before adding into state.
      //for call dispatch(incrementCount(1))

      reducer(state, action) {
        state.counts.push(action.payload)
      },
      prepare(number) {
        return {
          payload: {
            number: number,
            id: nanoid()
          }
        }
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = constats.loading
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = constats.rejected
      state.error = action.error.message
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = constats.success
      state.todos = state.todos.concat(action.payload)
    })
  }
})
export const getAllTodos = (state) => state.todos.todos
export const getTodoStatus = (state) => state.todos.status
export const getTodoError = (state) => state.todos.error
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementCount } = todoSlice.actions

export default todoSlice.reducer
