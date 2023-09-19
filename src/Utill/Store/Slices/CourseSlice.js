import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../Constants'
import { courseInitialState } from "../../InitialState/CourseInitialState"

const processCourse = (data) =>{
  const courses = [];
  for (let course of data.content) {
    courses.push({
      id: course.id,
      head: course.name,
      subhead: course.description,
      image: course.thumbnail,
      stars: course.rating,
      right: `Rs. ${course.price}`,
      badges: [],
    });
  }
  return {
    totalElements: data.totalElements,
    pages: data.totalPages,
    content: courses,
    pageSize: data.size,
    pageNumber: data.number,
  }
}

export const CourseSlice = createSlice({
  name: SLICE_NAMES.COURSE_SLICE,
  initialState: courseInitialState,
  reducers: {
    setCourse: (state,action)=>{
      const processedCourse = processCourse(action.payload);
      return {
        ...state,
        ...processedCourse
      }
    }
  }
})

export const {setCourse} = CourseSlice.actions;

export default CourseSlice.reducer;