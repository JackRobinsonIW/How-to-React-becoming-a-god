import styles from "./Card.css";

type CardProps = {
  children: React.ReactNode,
  title: string,
}

export const Card = (props: CardProps) => {
  const { children, title } = props;
  const { card } = styles();

  return (
    <div className={card}>
      <h2>{ title }</h2>
      { children }
    </div>
  );

};

