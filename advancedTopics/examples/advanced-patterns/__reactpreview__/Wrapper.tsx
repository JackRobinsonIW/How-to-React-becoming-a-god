import { styles } from "./Wrapper.css";

export const Wrapper: React.FC = ({ children }) => {
  const classes = styles();

  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.container}>{children}</div>
      </section>
    </>
  );
};
