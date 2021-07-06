import React, { useState } from 'react'

const Counter = () => {

  const [numberOfClicks, setNumberOfClicks] = useState(0)

  const handleClick = () => {
    setNumberOfClicks(numberOfClicks + 1)
  }

  return (
    <div>counter</div>
  )
}

export default Counter