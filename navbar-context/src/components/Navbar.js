import React, { useContext } from 'react'
import UserName from '../contexts/UserName';
import NavbarCSS from './NavbarCSS.module.css'

const Navbar = () => {

  const { name } = useContext(UserName)

  return (
    <div className={NavbarCSS.navBarWrapper}>
      Hi {name}!
    </div>
  )
}

export {Navbar}