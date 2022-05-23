import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import {wrapWithLoginRequire} from "./components/RequireLogin/RequireLogin";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={wrapWithLoginRequire(<Home/>)}/>
      <Route path="/about" element={wrapWithLoginRequire(<About/>)}/>
    </Routes>
  </BrowserRouter>
}

export default App;
