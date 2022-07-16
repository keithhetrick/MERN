import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  return (
    <div>
      <form className='form-card'>
        <div className='inputs'>
          <label className='labels'>First Name</label>
          <input type='text' onChange={(e) => setFirstName(e.target.value)} />
        </div>
          { firstName && firstName.length < 2 ? <p>First Name must be at least 2 characters</p> : null } 
        <div className='inputs'>
          <label className='labels'>Last Name</label>
          <input type='text' onChange={(e) => setLastName(e.target.value)} />
        </div>
        { lastName && lastName.length < 2 ? <p>Last Name must be at least 2 characters</p> : null } 
        <div className='inputs'>
          <label className='labels'>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        { email && email.length < 2 ? <p>Email must be at least 2 characters</p> : null } 
        <div className='inputs'>
          <label className='labels'>Password</label>
          <input type='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        { password && password.length < 8 ? <p>Password must be at least 8 characters</p> : null } 
        { confirmPassword && confirmPassword.length < {setPassword} ? <p>Passwords must match</p> : null } 
        <div className='inputs'>
          <label className='labels'>Confirm Password</label>
          <input type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      </form>
      <p>Your Form Data</p>
      <div className='user-card'>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  )
}

export default Form
