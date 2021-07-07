import ComponentWithProps from './ComponentWithProps';

type ComponentListProps = {
  names: string[]
}

const ComponentList = (props: ComponentListProps) => {
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