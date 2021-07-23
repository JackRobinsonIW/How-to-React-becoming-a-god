import { createUseStyles } from "react-jss";

const red = {
  color: "red",
  transition: '0.3s',
  '&:hover': {
    color: '#552222',
    transition: '0.3s',
  }
};

const card = {
  width: '50%',
  'min-width': '20em',
  height: '20em',
  transition: '0.1s',
  'background-color': 'white',
  margin: '2em auto',
}

export default createUseStyles({
  red,
  card
});
