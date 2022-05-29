import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// main basic routers
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { wrapWithLoginRequire } from "./components/RequireLogin/RequireLogin";

// A. contractor KPI routers
import ContractorsKPI from './pages/ContractorsKPI/ContractorsKPI';
import ContractorSingleKPI from './pages/ContractorsKPI/ContractorSingleKPI';
import ManagerKPI from './pages/ManagerKPI/ManagerKPI';
import ManagerSingleKPI from './pages/ManagerKPI/ManagerSingleKPI';
import Statistic from './pages/Statistic/Statistic';
import StatisticDetailTeam from './pages/Statistic/StatisticDetailTeam';
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={wrapWithLoginRequire(<Home />)} />
      <Route path="/about" element={wrapWithLoginRequire(<About />)} />
      <Route path="/contractor-KPI" element={wrapWithLoginRequire(<ContractorsKPI />)} />

      <Route path='contractor-KPI'>
        <Route index element={wrapWithLoginRequire(<ContractorsKPI />)} />
        <Route path=':id' element={<ContractorSingleKPI />} />
      </Route>
      <Route path='manager-KPI'>
        <Route index element={wrapWithLoginRequire(<ManagerKPI/>)} />
        <Route path=':id' element={<ManagerSingleKPI />} />
      </Route>
      <Route path='statistic'>
        <Route index element={wrapWithLoginRequire(<Statistic/>)} />
        <Route path=':id' element={<StatisticDetailTeam />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
