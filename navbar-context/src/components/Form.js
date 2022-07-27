import React, { useContext } from 'react'
import UserName from '../contexts/UserName'
import FormCSS from './FormCSS.module.css'

const Form = () => {

  const { name,setName } = useContext(UserName)

  return (
    <div>
      <form>
        <label>Your Name:</label>{' '}
        <input className={FormCSS.formInput}
          type='text'
          value={name}
          onChange={(e) => setName({...name, text:e.target.value})}
        />
      </form>
    </div>
  )
}

export {Form}