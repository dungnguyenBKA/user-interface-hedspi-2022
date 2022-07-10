import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Work from "../../models/Work";
import {fakeWork} from "../fake/fakeData";


const workSlice = createSlice({
  name: "work",
  initialState: fakeWork,
  reducers: {
    changeSubmitWork(state, payload: PayloadAction<Work>) {
      const newWork = payload.payload
      for (let i = 0; i < state.length; i++) {
        const _work = state.at(i)
        if (!_work) {
          break
        }
        if (_work.id === newWork.id) {
          _work.isSubmitted = newWork.isSubmitted
        }
      }
    }
  }
})

export const {changeSubmitWork} = workSlice.actions
export default workSlice.reducer
