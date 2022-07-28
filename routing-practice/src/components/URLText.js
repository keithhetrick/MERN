import React from 'react'
import { useParams } from 'react-router-dom'

const URLText = (props) => {

  const { text, color, bgColor } = useParams()

  return (
    <div>
      {
        isNaN(text)?
        <h1 style={color? {color: color, backgroundColor: bgColor} : null}>The word is: {text}</h1>
        :
        <h1>The number is: {text}</h1>
      }
    </div>
  )
}

export default URLText