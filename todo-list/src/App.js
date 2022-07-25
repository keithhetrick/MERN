import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [ toDoArr,setToDoArr ] = useState([])
  const [ toDo,setToDo ] = useState({
    text: '',
    completed: false
})

  const handleTask = (thisToDo) => {
    return (
      <label style={{listStyle: 'none', paddingLeft: 0, textDecoration: thisToDo.completed && 'line-through'}}>
        {thisToDo.text}
      </label>
    )
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(toDo === '')
    return 
    console.log(toDoArr);
    setToDoArr([...toDoArr,toDo]);
    setToDo({
      text: '',
      completed: false
  })

  }
  const handleOnChange = (i) => {
    setToDoArr(toDoArr.map((thisToDo, index) => {
      if (i === index) {
        thisToDo={...thisToDo, completed:!thisToDo.completed}
      }
      return thisToDo
    }))
  }

  const deleteToDo = (deleteTask) => {
    const pendingTasks = toDoArr.filter((thisToDo, index) => {
    return index !== deleteTask;
    })
    setToDoArr(pendingTasks);
    console.log(setToDoArr);
  }

  useEffect(() => {
    const data = window.localStorage.getItem('MY_TODOS');
    if ( data !== null ) setToDoArr(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('MY_TODOS', JSON.stringify(toDoArr))
  }, [toDoArr])

  return (
    <div className="App">
      <section>
        <form onSubmit={submitHandler}>
          <input 
            type='text' 
            name='title'
            value={toDo.text}
            onChange={(e) => setToDo({...toDo, text:e.target.value})} />
          <div>
            <button>Add</button>
          </div>
        </form>
      </section>
      <section >
        {
          toDoArr.map((thisToDo, i) => (
            <div key={i}>
              {handleTask(thisToDo)}
              <input 
                type='checkbox' 
                checked={thisToDo.completed} 
                onChange={e => handleOnChange(i)} />
              <button onClick={deleteToDo}>Delete</button>
            </div>
          ))
        }
      </section>
    </div>
  );
}


export default App;