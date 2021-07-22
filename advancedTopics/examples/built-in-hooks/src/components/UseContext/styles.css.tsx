import { createUseStyles } from "react-jss";

const form = {
  width: '30%',
  'min-width': '10em',
  'min-height': '10em',
  padding: '1em',
  'background-color': 'white',
  'border-radius': '1em',
  'border-left': 'solid 2px #eeeeee',
  'border-right': 'solid 2px #eeeeee',
};

const input = {
  'background-color': 'white',
  padding: '1em',
  'border': 'solid 1px #eeeeee',
  'border-bottom': 'solid 2px #ee4422',
  '&:hover': {
    'background-color': '#eeeeee',
    'cursor': 'pointer'
  },
}

const preview = {
  ...form,
  '& ul': {
    'padding': 0,
    'list-style-type': 'none',
  }
}

const flexContainer = {
  display: 'flex',
  'align-content': 'center',
  'justify-content': 'space-between'
}

export default createUseStyles({
  form,
  input,
  preview,
  flexContainer,
});
