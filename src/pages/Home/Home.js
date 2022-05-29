import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
import AppText from "../../components/AppText/AppText";
import useAuth from "../../hooks/useAuth";
import Row from "../../components/Row/Row";



const Home = (props) => {
  const {signOut, user} = useAuth()
  
  return (
     <div >
         <NavBar/>
         <h1>Home</h1>
     </div>
  )
}


export default Home
