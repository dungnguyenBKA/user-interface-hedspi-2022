import React from "react";
import useAuth from "../../hooks/useAuth";
import Login from "../../pages/Login/Login";

interface RequireLoginProps {
  children: JSX.Element;
}

const RequireLogin: React.FC<RequireLoginProps> = (props) => {
  const {user} = useAuth()
  if (!user) {
    return <Login/>
  }
  return props.children
}

export default RequireLogin

export function wrapWithLoginRequire(page: JSX.Element) {
  return <RequireLogin>
    {page}
  </RequireLogin>
}
