// Remember that this is actually a .tsx file but we can drop the extension from the import.
import styles from "./CSSInJSStyledComponent.css";

const CSSInJSStyledComponent = () => {
  const { red } = styles();

  return <h1 className={red}>Hello World!</h1>;
};

export default CSSInJSStyledComponent;
