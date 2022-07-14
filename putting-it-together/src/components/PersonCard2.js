import { useState } from 'react'

const PersonCard2 = (props) => {

  const [state,setState] = useState(88);

  return (
    
    <div>
      <h1>
        { props.person[1].lastName }, { props.person[1].firstName }
      </h1>
      <p>Age: { state }</p>
      <p>Hair Color: { props.person[1].hairColor }</p>
      <button className='btn' onClick={()=>setState(state+1)}>Birthday Button for John Smith</button>
    </div>
  )
}

export default PersonCard2