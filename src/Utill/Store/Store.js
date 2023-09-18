import { configureStore } from '@reduxjs/toolkit'
import courseReducers from './Slices/CourseSlice'
import userReducers from './Slices/UserSlice'

export const store = configureStore({
  reducer: {
    courseSlice: courseReducers,
    userSlice: userReducers
  },
  devTools: true
});