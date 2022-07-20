import React from 'react'
import { useState } from 'react';
import HeaderCSS from './HeaderCSS.module.css'

const Header = (props) => {
  
  const { box, setBox } = props;
  const [ color, setColor ] = useState('');

  const submitHandler = (b) => {
    b.preventDefault()
    if(box){
      console.log({box});
    }
    setBox([ ...box, color ]);
  }

  return (
    <div>
      <form className={HeaderCSS.form} onSubmit={ submitHandler }>
        <label>Color</label>
        <input className={HeaderCSS.input} type='text' onChange={ (e) => setColor(e.target.value)} />
        <button className={HeaderCSS.btn}>Add</button>
      </form>
    </div>
  )
}

export default Header