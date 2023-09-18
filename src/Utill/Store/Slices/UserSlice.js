import { createSlice } from '@reduxjs/toolkit'
import { SLICE_NAMES } from '../../Constants'
import { userInitialState } from "../../InitialState/UserInitialState"

export const UserSlice = createSlice({
  name: SLICE_NAMES.USER_SLICE,
  initialState: userInitialState,
  reducers: {
    setUser: (state,action)=>{
      return {
        ...state,
        ...action.payload
      }
    }
  },
})

export const {setUser} = UserSlice.actions;

export default UserSlice.reducer;