import styles from "./CSSInJSStyledComponent.css";

const CSSStyledComponent = () => {
  const { card } = styles();
  return <h1 className={ card }>I am styled by global css!</h1>;
};

export default CSSStyledComponent;
