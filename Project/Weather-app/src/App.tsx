import React from 'react';
import { Routes, Route} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import {Home} from './components/Home';
import { CountryDetails } from './components/CountryDetails';
function App() {
  
    return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:name" element={<CountryDetails />} />
          </Routes>
      </div>
  
  );
}

export default App;
