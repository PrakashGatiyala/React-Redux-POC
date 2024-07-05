import { configureStore } from '@reduxjs/toolkit'
import  TodoReducer  from './Slices/TodoSlice'

export default configureStore({
  reducer: {
    todo: TodoReducer
  },
  devTools: true
})