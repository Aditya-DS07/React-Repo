import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to = "/">Home</Link>
        <Link to ="/bollywood">Bollywood</Link>
        <Link to = "/games">Games</Link>
        <Link to = "/fitness">Fitness</Link>
        <Link to = "/food">Food</Link>
    </nav>
  )
}

export default Navbar
