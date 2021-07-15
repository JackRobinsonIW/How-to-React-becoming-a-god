import { useState } from 'react'

export const UseState = () => {
  
  /**
   * When not using state, incrementing a value wil have no effect!
   */
  // let count = 0
  // const handleOnClick = () => count++
  
  /**
   * When using what is returned from the useState hook
   * changing count will result in what is rendered to the DOM being updated
   */
  const [count, setCount] = useState(0);
  const handleOnClick = () => setCount(count + 1)

 return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleOnClick}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>
        Clear State!
      </button>
    </div>
  )
}