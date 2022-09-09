import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Country from "./Components/country";
import CountryList from './Components/countryList';

const App = () => {
 
  return(
      <Router> 
          <Routes>
          <Route exact path='/country/:name' element={< Country />}></Route>
          <Route exact path='/' element={ <CountryList/> }></Route>
          </Routes>

      </Router>
  )

}

export default App;

