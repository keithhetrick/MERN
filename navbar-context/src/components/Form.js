import React, { useContext } from 'react'
import {UserName} from '../contexts/UserName'
import FormCSS from './FormCSS.module.css'

const Form = () => {

  const { name,setName } = useContext(UserName)

  return (
    <div>
      <form>
        <label>Your Name:</label>
        <input className={FormCSS.formInput}
          type='text'
          name='userInput'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export {Form}