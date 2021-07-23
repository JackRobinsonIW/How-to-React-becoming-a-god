import { useRef } from "react";
import { RenderCounter } from "../RenderCounter";

export const UncontrolledInput = () => {
  // We create a ref for our input field
  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = (event) => {
    event.preventDefault();

    // We can get the value of the input field from our ref
    console.log(inputRef.current.value);
  };

  // The input takes our ref as a prop, the value is maintained internally
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Uncontrolled Input Field:
          <input type="text" ref={inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <RenderCounter />
    </>
  );
};
