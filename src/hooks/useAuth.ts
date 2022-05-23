import {useAppDispatch, useAppSelector} from "./useStore";
import UserModel from "../models/UserModel";
import {signIn, signOut} from "../store/slices/UserSlice";

export default function useAuth() {
  const authData = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  return {
    user: authData.user,
    token: authData.token,
    signIn(user: UserModel, token: string) {
      dispatch(signIn({
        user,
        token
      }))
    },
    signOut() {
      dispatch(signOut())
    }
  }
}
