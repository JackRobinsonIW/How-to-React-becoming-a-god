type ComponentWithPropsProps = {
  name: string;
}

const ComponentWithProps = (props: ComponentWithPropsProps) => {
  const { name } = props;
  return (
    <h1>Hello {name}!</h1>
  )
}

export default ComponentWithProps;