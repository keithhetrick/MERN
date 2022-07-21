import React from 'react'
import MainCSS from './MainCSS.module.css'

const Main = (props) => {
  return (
    <div>
      <div className={MainCSS.mainBox}>
        { props.children }
      </div>
    </div>
  )
}

export default Main