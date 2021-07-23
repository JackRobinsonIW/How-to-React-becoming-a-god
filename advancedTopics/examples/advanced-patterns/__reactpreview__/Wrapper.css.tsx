import { createUseStyles } from "react-jss";

const controlStyles = {
  margin: "0px 10px",
  fontSize: "calc(10px + 2vmin)",
};

export const styles = createUseStyles({
  wrapper: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",

    "& input": controlStyles,
    "& button": controlStyles,
  },

  container: {
    width: "50%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "40em",
    minHeight: "10em",
    margin: "1em auto",
    padding: "1em",
    backgroundColor: "white",
    borderRadius: "2em",
    boxShadow: "10px 10px 10px black",
    color: "#282c34",
  },
});
