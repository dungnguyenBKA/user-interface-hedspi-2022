import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
import AppText from "../../components/AppText/AppText";

const Home: React.FC = () => {
  return <Column>
    <NavBar/>
    <AppText>Home</AppText>
  </Column>
}

export default Home