import React from 'react'

const ComponentWithProps = (props) => {
  const { name } = props;
  return (
    <h1>Hello {name}!</h1>
  )
}

export default ComponentWithProps;