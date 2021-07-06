import React from 'react'

const CounterButton = (props) => {
  const { onClick } = props
  return (
    <button type="button" onClick={onClick}>Count!</button>
  )
}

export default CounterButton