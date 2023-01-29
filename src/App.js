import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import SearchPage from './components/SearchPage'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/search'>
            <SearchPage />
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