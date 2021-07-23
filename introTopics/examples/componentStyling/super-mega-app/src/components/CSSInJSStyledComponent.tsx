// Remember that this is actually a .tsx file but we can drop the extension from the import.
import styles from "./CSSInJSStyledComponent.css";

type CardProps = {
  children: React.ReactNode,
}
const Card = (props: CardProps) => {
  const { children } = props;
  const { card } = styles();

  return (
    <div className={card}>
      { children }
    </div>
  )
}

const CSSInJSStyledComponent = () => {
  const { red } = styles();

  return (
    <Card>
      <h1 className={red}>I am styled using css-in-js!</h1>
    </Card>
  );
};

export default CSSInJSStyledComponent;


