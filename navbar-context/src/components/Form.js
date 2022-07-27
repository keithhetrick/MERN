import React, { useContext } from 'react'
import UserNameContext from '../contexts/UserNameContext'
import FormCSS from './FormCSS.module.css'

const Form = () => {

  const { name,setName } = useContext(UserNameContext)

  return (
    <div>
      <form>
        <label>Your Name:</label>
        <input className={FormCSS.formInput}
          type='text'
          name='user'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Form