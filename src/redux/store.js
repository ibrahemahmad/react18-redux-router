import { configureStore } from '@reduxjs/toolkit'
import countSlice  from './reducers/countSlice'
import useReducer from './reducers/userReducer'

export default  configureStore({
   reducer:{
    user:useReducer,
    count:countSlice,
   }
})
	
