import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import './home.css'
import Footer from "../../components/Footer/footer";
import Column from "../../components/Column/Column";


const Home = () => {
  return (
    <Column>
      <NavBar/>
      <img
        id='home-img'
        src='https://statics.vincom.com.vn/containers/vincom_ho/anh_hero_banner/Smart-City-Banner-web-1920-x-800.png/67c5ad055f97b14dc07fe7a2cfa732f7.webp'
      />
      <Footer/>
    </Column>
  )
}


export default Home
