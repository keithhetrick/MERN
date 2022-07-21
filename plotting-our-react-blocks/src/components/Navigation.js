import React from 'react'
import NavigationCSS from './NavigationCSS.module.css'

const Navigation = () => {
  return (
    <div>
      <div className={NavigationCSS.navWrapper}>
        <div className={NavigationCSS.navBox}></div>
      </div>
    </div>
  )
}

export default Navigation