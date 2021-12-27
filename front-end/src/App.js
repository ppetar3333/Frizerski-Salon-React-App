import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrizerskiSalonList from "./components/FrizerskiSalonList.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FrizerskiSalonList />} />
      </Routes>
    </Router>
  );
}

export default App;
