import React from 'react'
import { useState } from 'react'
import TodoCSS from "./TodoCSS.module.css";

const Todo = () => {

  const [checked, setChecked] = useState (false)

  const handleOnChange = (e) => {
    setChecked(!checked);
  }

  return (
    <div>
      <section className={TodoCSS.inputForm}>
        <form>
          <input type='text' />
        </form>
        <button>Add</button>
      </section>
      <section className={TodoCSS.toDoList}>
        <input
          type='checkbox'
          id=''
          name=''
          value=''
          checked={checked}
          onChange={handleOnChange}
        />
      <button>Delete</button>
      </section>
    </div>
  )
}

export { ToDo }