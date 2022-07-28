import React from 'react'
import { useParams } from 'react-router-dom'

const URLNumber = () => {
  
  const { num } = useParams()
  
  return (
    <div>
      <h2>The number is: {num}</h2>
    </div>
  )
}

export default URLNumber
