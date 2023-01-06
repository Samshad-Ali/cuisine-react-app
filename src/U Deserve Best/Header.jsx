import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className='h'>
        
              <h1>U Deverse Best</h1>
           </div> 
          <ul>
              <li><Link className='link' to='/home'>Home</Link> </li>
              <li><Link className='link' to='/about'>About</Link> </li>
              <li><Link className='link' to='/login' >Login</Link> </li>
    
          </ul>
    </div>
  )
}

export default Header