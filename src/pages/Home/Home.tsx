import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";
import Row from "../../components/Row/Row";

const Home: React.FC = () => {
  const {signOut, user} = useAuth()
  return <Column>
    <NavBar/>
    <AppText>Home</AppText>
    <Row>
      <AppText>Hello, {user?.username}</AppText>
      <button onClick={() => {
        signOut()
      }}>
        Sign Out
      </button>
    </Row>

  </Column>
}

export default Home