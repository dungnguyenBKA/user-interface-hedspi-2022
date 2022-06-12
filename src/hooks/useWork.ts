import {useAppDispatch, useAppSelector} from "./useStore";
import Work from "../models/Work";
import {changeSubmitWork} from "../store/slices/WorkSlice";

export default function useWork() {
  const works = useAppSelector(state => state.work)
  const dispatch = useAppDispatch()

  return {
    works,
    changeSubmitWork(work: Work) {
      dispatch(changeSubmitWork(work))
    }
  }
}