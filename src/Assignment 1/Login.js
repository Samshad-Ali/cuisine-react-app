import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState([{ email: ''}])
    const [pass, setPass] = useState([{ password: '' }])
    const [user, setUser] = useState([]);
    
    function handleSubmit(e) {
        e.preventDefault();
        const temp = [...user, email, pass];
        setUser(temp)
        console.log(user)
  }
    
  return (
      <form>
          <label htmlFor="email">Email here</label>
          <input type="email" onChange={e=>setEmail(e.target.value)} name="email" id="email" />
          <label htmlFor="password">Password here</label>
          <input type="password" onChange={e=>setPass(e.target.value)} name="password" id="password" />
          <input type="submit" className='submit'  value='Submit' onClick={handleSubmit} />
    </form>
  )
}

export default Login;