import React, { useState } from 'react'
import UserNameContext from '../contexts/UserNameContext'

const Wrapper = ({ children }) => {

  const [name, setName] = useState()

  return (
    <UserNameContext.Provider value={{name, setName}}>
      { children }
    </UserNameContext.Provider>
  )
}

export default Wrapper