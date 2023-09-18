import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourse } from "../../../Components/ApiHandler/fetchCourse";

export const fetchCourseThunk = createAsyncThunk('courseSlice/fetchCourse', async (body,thunkApi) => {
    return await fetchCourse("",body.pageNumber,body.pageSize);
});