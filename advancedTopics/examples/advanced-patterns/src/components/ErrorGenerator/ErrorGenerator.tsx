import { useState } from "react";
import { Button } from "../Button";

type ErrorGeneratorProps = {
  id: number;
  message: string;
};

export const ErrorGenerator = ({ id, message }: ErrorGeneratorProps) => {
  const [triggerError, setTriggerError] = useState(false);

  const onClick = async () => {
    // This won't actually trigger our boundary!
    // throw new Error("Some Error");

    // Nor will this!
    // await Promise.reject("Some async reason");

    // But this will!
    setTriggerError(true);
  };

  if (triggerError) {
    throw new Error(message);
  }

  return <Button onClick={onClick} label={`Trigger Error ${id}`} />;
};
