import React from 'react'
import ContentCSS from './ContentCSS.module.css'

const Content = (props) => {

  const { box } = props;

  return (
    <div>
      {
        box.map((color, index) => (
          <div className={ContentCSS.boxColor} key={index} style={{ backgroundColor: color }} >
          </div>
        ))
      }
    </div>
  );
}

export default Content