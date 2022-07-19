import React from 'react'
import { useReducer } from 'react';

const ACTION = {
  SET_FIRSTNAME: 'setFirstName', 
  SET_LASTNAME: 'setLastName',
  SET_EMAIL: 'setEmail'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setFirstName':
      return {...state, firstName: action.payload};
    case 'setLastName':
      return {...state, lastName: action.payload};
    case 'setEmail':
      return {...state, email: action.payload};
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, { firstName: '', lastName: '', email: ''})
  
  return (
    <div className='form-input'>
      <form>
        <div className='form-align'>
          <label className='inputHeader'>First Name</label>
          <input className='inputText' type='text' value={state.firstName} onChange={((e) => dispatch({ type: ACTION.SET_FIRSTNAME, payload: e.target.value }))} /> 
        </div>
        { state.firstName && state.firstName.length < 2 ? <p>First Name must be at least 2 characters</p> : null }
        <div className='form-align'>
          <label className='inputHeader'>Last Name</label>
          <input className='inputText' type='text' value={state.lastName} onChange={((e) => dispatch({ type: ACTION.SET_LASTNAME, payload: e.target.value }))} />
        </div>
        { state.lastName && state.lastName.length < 2 ? <p>Last Name must be at least 2 characters</p> : null }
        <div className='form-align'>
          <label className='inputHeader'>Email</label>
          <input className='inputText' type='email' value={state.email} onChange={((e) => dispatch({ type: ACTION.SET_EMAIL, payload: e.target.value }))} />
        </div>
        { state.email && state.email.length < 2 ? <p>Email must be at least 2 characters</p> : null }
      </form>
      <button>Submit</button>
    </div>
  )
}

export default Form