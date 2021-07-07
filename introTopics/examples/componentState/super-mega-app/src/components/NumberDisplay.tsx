import React from 'react'

type NumberDisplayProps = {
  count: number;
}

const NumberDisplay = (props: NumberDisplayProps) => {
  const { count } = props
  return (
    <div>{count}</div>
  )
}

export default NumberDisplay