import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Bollywood from './Components/Bollywood'
import Games from './Components/Games'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import "./App.css"
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/bollywood" element = {<Bollywood/>}/>
          <Route path = "/games" element = {<Games/>}/>
          <Route path = "/fitness" element = {<Fitness/>}/>
          <Route path = "/food" element = {<Food/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App