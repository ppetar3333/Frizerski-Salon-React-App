import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrizerskiSalonList from "./components/FrizerskiSalonList.js";
import LogIn from "./layout/LogIn.js";
import Registracija from "./layout/Registracija.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/salonPodaci' element={<FrizerskiSalonList />} />
        <Route path='/registracija' element={<Registracija /> } />
      </Routes>
    </Router>
  );
}

export default App;
