import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './screens/HomePage';
import Signup from './screens/Signup';
import MovieShow from './screens/MovieShow';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/netflix' element={<MovieShow/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
      
    </Router>
  )
}

export default App

