import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrizerskiSalonList from "./components/FrizerskiSalonList.js";
import KorisniciList from "./components/KorisniciList.js";
import LogIn from "./layout/LogIn.js";
import Registracija from "./layout/Registracija.js";
import Admin from "./pages/Admin.js";
import Clan from "./pages/Clan.js";
import ErrorPage from "./pages/ErrorPage.js";
import Frizer from "./pages/Frizer.js";
import Home from "./pages/Home.js";
import TerminList from './components/TerminList';
import SvojiPodaci from "./components/SvojiPodaci.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/registracija' element={<Registracija /> } />
        <Route path='/salonPodaci' element={<FrizerskiSalonList />} />
        <Route path='/korisniciPodaci' element={<KorisniciList /> } />
        <Route path='/clan' element={<Clan /> } />
        <Route path='/admin' element={<Admin /> } />
        <Route path='/frizer' element={<Frizer />} />
        <Route path='/termini' element={<TerminList /> } />
        <Route path='svojiPodaci' element={ <SvojiPodaci /> } />
        <Route path='*' element={<ErrorPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
