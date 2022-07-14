import { useState } from 'react'

const PersonCard1 = (props) => {

  const [state,setState] = useState(45)

  return (

    <div>
      <h1>
          { props.person[0].lastName }, { props.person[0].firstName }
      </h1>
      <p>Age: { state }</p>
      <p>Hair Color: { props.person[0].hairColor }</p>
      <button className='btn' onClick={()=>setState(state+1)}>Birthday Button for Jane Doe</button>
    </div>
  );
}

export default PersonCard1