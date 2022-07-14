import { useState } from 'react'

const PersonCard4 = (props) => {

  const [state,setState] = useState(62);

  return (
    
    <div>
      <h1>
        { props.person[3].lastName }, { props.person[3].firstName }
      </h1>
      <p>Age: { state }</p>
      <p>Hair Color: { props.person[3].hairColor }</p>
      <button className='btn' onClick={()=>setState(state+1)}>Birthday Button for Maria Smith</button>
    </div>
  )
}

export default PersonCard4