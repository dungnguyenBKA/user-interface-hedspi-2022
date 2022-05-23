import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
import AppText from "../../components/AppText/AppText";

const About: React.FC = () => {
  return <Column>
    <NavBar/>
    <AppText>About</AppText>
  </Column>
}

export default About