type CounterButtonProps = {
  onClick: () => void;
}

const CounterButton = (props: CounterButtonProps) => {
  const { onClick } = props
  return (
    <button type="button" onClick={onClick}>Count!</button>
  )
}

export default CounterButton