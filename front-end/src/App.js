import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrizerskiSalonList from "./components/FrizerskiSalonList.js";
import KorisniciList from "./components/KorisniciList.js";
import LogIn from "./layout/LogIn.js";
import Registracija from "./layout/Registracija.js";
import ErrorPage from "./pages/ErrorPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/registracija' element={<Registracija /> } />
        <Route path='/salonPodaci' element={<FrizerskiSalonList />} />
        <Route path='/korisniciPodaci' element={<KorisniciList /> } />
        <Route path='*' element={<ErrorPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
