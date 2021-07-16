import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTimeout(() => setData(JSON.stringify(json)), 2000))
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <div>{error}</div>;

  if(data) return <div>{data}</div>

  return <div>loading...</div>
};
