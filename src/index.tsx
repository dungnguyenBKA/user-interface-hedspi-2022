import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error404 from './components/Error/404';
import About from "./pages/About/About"
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./store/store";
import {sleep} from "./utils/utils";
import Splash from "./pages/Splash/Splash";
import App from "./App";
import  Foreman  from './pages/ForemanManage/ForemanManage';
import Home from './pages/Home/Home';
import { WorkSubmitted } from './pages/ForemanManage/WorkSubmitted';
import { DeclineSubmitted } from './pages/ForemanManage/DeclineSubmitted';

// app font
import "./fonts/bold.ttf"
import "./fonts/semiBold.ttf"
import "./fonts/regular.ttf"
import "./fonts/medium.ttf"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <Routes>
            <Route path='/' element={<Home/>}>
              <Route index element={<App/>} />
              <Route path='/foreman' element={<Foreman/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/worksubmit' element={<WorkSubmitted/>} />
              <Route path='/decline' element={<DeclineSubmitted/>} />
            </Route>
            
            <Route path='*' element={<Error404/>}/>
        </Routes>   
          
      </Provider>
    </Router>

  </React.StrictMode>
);
