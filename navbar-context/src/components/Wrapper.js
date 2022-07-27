import React, { useState } from 'react'
import UserName from '../contexts/UserName'

const Wrapper = ({ children }) => {

  const [name, setName] = useState()

  return (
    <UserName.Provider value={{name, setName}}>
      { children }
    </UserName.Provider>
  )
}

export {Wrapper}