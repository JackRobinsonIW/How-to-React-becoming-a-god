import React from 'react'

const NumberDisplay = (props) => {
  const { count } = props
  return (
    <div>{count}</div>
  )
}

export default NumberDisplay