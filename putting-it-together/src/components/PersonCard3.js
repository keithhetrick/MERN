import { useState } from 'react'

const PersonCard3 = (props) => {

  const [state,setState] = useState(50);

  return (
    
    <div>
      <h1>
        { props.person[2].lastName }, { props.person[2].firstName }
      </h1>
      <p>Age: { state }</p>
      <p>Hair Color: { props.person[2].hairColor }</p>
      <button className='btn' onClick={()=>setState(state+1)}>Birthday Button for Millard Fillmore</button>
    </div>
  )
}

export default PersonCard3