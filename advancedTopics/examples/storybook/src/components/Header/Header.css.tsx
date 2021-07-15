import { createUseStyles } from "react-jss";

export default createUseStyles({
  wrapper: {
    fontFamily: "Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& button + button": {
      marginLeft: "10px",
    },
  },
  title: {
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: 1,
    margin: "6px 0 6px 10px",
    display: "inline-block",
    verticalAlign: "top",
  },
  image: {
    display: "inline-block",
    verticalAlign: "top",
  },
});
