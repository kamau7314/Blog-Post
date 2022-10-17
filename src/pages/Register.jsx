import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
    <h1>Register</h1>
    <form action="">
      <input type="text" placeholder='username'/>
      <input type="Email" placeholder='email'/>
      <input type="password" placeholder='password'/>
      <input type="password" placeholder='Repeat password'/>
      <button>Login</button>
      <p>This is an error!</p>
      <span>Already have an account? <Link to="/login">Login</Link></span>
    </form>
    </div>
  )
}

export default Register