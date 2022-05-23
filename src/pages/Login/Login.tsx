import React from "react";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";
import Row from "../../components/Row/Row";

const Login: React.FC = () => {
  const {signIn} = useAuth()
  return <Row>
    <AppText>Login with user: DungnguyenBKA</AppText>
    <button
      onClick={() => {
        signIn({
            username: "dungnguyenBKA"
          },
          "fake_token"
        )
      }}
    >
      Login
    </button>
  </Row>
}

export default Login
