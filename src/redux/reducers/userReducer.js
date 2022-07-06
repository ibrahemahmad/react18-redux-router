import { createSlice } from '@reduxjs/toolkit'

export const userSlince = createSlice({
  name: 'user',
  initialState: {
    token: "",
    name:"ibrahem ahmed"
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSlince.actions

export default userSlince.reducer