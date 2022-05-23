import React from 'react';
import AppText from "./components/AppText/AppText";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
