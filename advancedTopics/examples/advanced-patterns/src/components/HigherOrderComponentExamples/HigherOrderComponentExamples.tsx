import { useState } from "react";
import { Button } from "../Button";
import { HelloWorld, HelloWorldWithLoader } from "../HelloWorld";
import { DisplayField, DisplayFieldWithCounter } from "../DisplayField";

export const HigherOrderComponentExamples = () => {
  const [loading, setLoading] = useState(true);

  const onClick = () => {
    setLoading(!loading);
  };

  console.log(loading);

  return (
    <>
      <HelloWorld name={"Boris Johnson"} />

      {/* <Button onClick={onClick} label={"Toggle Loading"} />
      <HelloWorldWithLoader loading={loading} name={"Joe Biden"} /> */}

      {/* <DisplayField value={100} bold /> */}

      {/* <DisplayFieldWithCounter /> */}
    </>
  );
};
