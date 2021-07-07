type CounterButtonProps = {
  onClick: () => unknown;
}

const CounterButton = (props: CounterButtonProps) => {
  const { onClick } = props
  return (
    <button type="button" onClick={onClick}>Count!</button>
  )
}

export default CounterButton