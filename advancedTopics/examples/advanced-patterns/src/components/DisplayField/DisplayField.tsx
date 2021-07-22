import styles from "./DisplayField.css";
import { asCounter } from "../../utils/asCounter";

export type DisplayFieldProps = {
  value: number;
  bold?: boolean;
};

export const DisplayField = ({ value, bold }: DisplayFieldProps) => {
  const classes = styles();

  return <span className={bold ? classes.bold : ""}>{value}</span>;
};

export const DisplayFieldWithCounter = asCounter(DisplayField);
