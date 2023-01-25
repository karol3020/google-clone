import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home.js'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/search'>
            <h1>This is the search page</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </Router>
   </div>
  );
}

export default App;