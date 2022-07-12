import React from 'react'
import App from '../App';

const PersonCard = (props) => {
const { lastName, firstName, hairColor } = props;

    return (
        <div>
            <h2>
                { lastName }, { firstName }
            </h2>
            <p>Age: { props.value }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    );
}

export default PersonCard