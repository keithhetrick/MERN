import React, { useContext } from 'react'
import UserNameContext from '../contexts/UserNameContext';
import NavbarCSS from './NavbarCSS.module.css'

const Navbar = () => {

  const { name } = useContext(UserNameContext)

  return (
    <div className={NavbarCSS.navBarWrapper}>
      Hello, 
        <span className={NavbarCSS.userName}>
          {name}
        </span>
      !
    </div>
  )
}

export default Navbar