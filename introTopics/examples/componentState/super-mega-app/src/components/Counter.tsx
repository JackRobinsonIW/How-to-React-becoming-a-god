import { useState } from 'react'
import CounterButton from './CounterButton'
import NumberDisplay from './NumberDisplay'

const Counter = () => {

  // const [numberOfClicks, setNumberOfClicks] = useState(0)

  const handleClick = () => {
    // setNumberOfClicks(numberOfClicks + 1)
  }

  return (
    <>
      <NumberDisplay count={0} />
      {/* <NumberDisplay count={numberOfClicks} /> */}
      <CounterButton onClick={handleClick} />
    </>
  )
}

export default Counter