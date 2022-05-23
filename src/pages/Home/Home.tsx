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
    <AppText
      fontType={"bold"}
      style={{
        fontSize: 20,
        color: 'red'
      }}
    >
      Home
    </AppText>
    <Row>
      <AppText
        style={{
          fontSize: 16,
          color: 'green'
        }}
        fontType={"semiBold"}
      >Hello, {user?.username}</AppText>
      <button onClick={() => {
        signOut()
      }}>
        Sign Out
      </button>
    </Row>
  </Column>
}

export default Home
