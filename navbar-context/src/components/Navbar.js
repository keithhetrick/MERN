import React, { useContext } from 'react'
import {UserName} from '../contexts/UserName';
import NavbarCSS from './NavbarCSS.module.css'

const Navbar = () => {

  const { name } = useContext(UserName)

  return (
    <div className={NavbarCSS.navBarWrapper}>
      Hello, 
        <span className={NavbarCSS.userText}>
          {name}
        </span>
      !
    </div>
  )
}

export {Navbar}