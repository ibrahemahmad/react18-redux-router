import { configureStore } from '@reduxjs/toolkit'
import countSlice  from './reducers/countSlice'
import todoSlice from './reducers/todoSlice'
import useReducer from './reducers/userReducer'

export default  configureStore({
   reducer:{
    user:useReducer,
    count:countSlice,
    todos:todoSlice
   }
})
	
