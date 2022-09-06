import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Country from "./Components/country";

const App = () => {
 
  return(
      <Router>
        <div className="Data">
          <Link to="/hola"></Link>
          <Routes>
          <Route exact path='/hola' element={< Country />}></Route>
          </Routes>
        </div>
      </Router>
  )

}

export default App;

