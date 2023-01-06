import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
        <li><Link to='/breakfast'> <button>Breakfast</button></Link></li>
        <li><Link to='/lunch'> <button>Lunch</button></Link></li>
        <li><Link to='/dinner'> <button>Dinner</button></Link></li>
    </nav>
  )
}

export default NavBar