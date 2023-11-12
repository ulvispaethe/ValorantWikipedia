import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Header from './layouts/Header'
import Agents from './pages/Agents'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/agents/:uuid' element={<Detail/>}/>
      </Routes>
    </Router>
  )
}

export default App
