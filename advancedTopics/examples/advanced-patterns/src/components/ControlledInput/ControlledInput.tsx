import { useState } from "react";
import { RenderCounter } from "../RenderCounter";

export const ControlledInput = () => {
  // The form value is maintained in Component State
  const [value, setValue] = useState("");

  // We create a callback which can be used to update the state
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  // The input component's value and change callback are passed in as props
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Input Field:
          <input type="text" value={value} onChange={onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <RenderCounter />
    </>
  );
};
