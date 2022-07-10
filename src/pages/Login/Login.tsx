import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button, TextField } from "@mui/material";
import Column from "../../components/Column/Column";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AppText from "../../components/AppText/AppText";

const Login: React.FC = () => {
  const { signIn } = useAuth()
  const { width, height } = useWindowDimensions()
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const [isValid, setValid] = useState(false)
  useEffect(() => {
    setValid(username.length > 0 && pwd.length > 0)
  }, [username, pwd])

  return <Column
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: height
    }}>

    <AppText style={{
      fontSize: 30
    }}>Đăng nhập</AppText>
    <TextField
      style={{
        width: 500,
        marginTop: 16,
        marginBottom: 16
      }}
      value={username}
      onChange={(e) => {
        setUsername(e.target.value)
      }}
      placeholder={""}
      variant={"filled"}
      label={"Username"} />
    <TextField
      style={{
        width: 500,
        marginTop: 16,
        marginBottom: 16
      }}
      value={pwd}
      onChange={(e) => {
        setPwd(e.target.value)
      }}
      type={"password"}
      placeholder={""}
      variant={"filled"}
      label={"Password"} />
    <Button
      style={{
        width: 500,
        marginTop: 8,
        marginBottom: 8
      }}
      onClick={() => {
        signIn({
          username,
          pwd,
          role: "manager"
        },
          "fake_token"
        )
      }}
      disabled={!isValid}
      variant="outlined">
      Login
    </Button>

    <Button
      style={{
        width: 500,
        marginTop: 20,
      }}
      variant="outlined"
      onClick={() => {
        signIn({
          username: "Nhà thầu (test)",
          pwd: "",
          role: "contractor"
        },
          "fake_token"
        )
      }}>
        Đăng nhập với vai trò nhà thầu (test)
    </Button>

    <Button
      style={{
        width: 500,
        marginTop: 15,
      }}
      variant="outlined"
      onClick={() => {
        signIn({
          username: "Quản lý/Đốc công (Test)",
          pwd: "",
          role: "manager"
        },
          "fake_token"
        )
      }}>
        Đăng nhập với vai trò quản lý / đốc công (test)
    </Button>

  </Column>
}

export default Login
