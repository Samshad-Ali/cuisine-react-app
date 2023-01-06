import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const BreakFast = () => {
  return (
    <div>
      <nav className='sub'>
        <li> <Link to='veg'><button>Veg Item</button></Link> </li>
        <li> <Link to='nonVeg'><button>Non-Veg Item</button></Link> </li>
     </nav>
   
      <Outlet/>
   
    </div>
  )
}

export default BreakFast