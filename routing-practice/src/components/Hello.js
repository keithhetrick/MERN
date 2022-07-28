import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {

  const { type } = useParams()

  return (
    <div>
      <h1>The word is: {type}</h1>
    </div>
  )
}

export default Hello