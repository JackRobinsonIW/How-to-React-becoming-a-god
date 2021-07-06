

import React from 'react';
import ComponentWithProps from './ComponentWithProps';

const ComponentList = (props) => {
  const { names } = props;
  return (
    <li>
      {
        names.map((name) => (<ComponentWithProps name={name}/>))
      }
    </li>
  )
}

export default ComponentList;