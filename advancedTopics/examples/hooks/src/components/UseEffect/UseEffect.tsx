import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<string | undefined>(undefined);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const fetchData = (pageNumber: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${pageNumber}`)
    .then((response) => response.json())
    .then((json) => setTimeout(() => setData(JSON.stringify(json)), 2000))
    .catch((e: Error) => setError(e.message));
  }

  useEffect(() => {
   fetchData(pageNumber) 
  }, [pageNumber]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(undefined);
    setError(undefined)
    setPageNumber(parseInt(event.target.value, 10));
  }

  return (
    <>
      <label htmlFor="pageNumber">Enter Page Number:</label>
      <input name="pageNumber" type="number" step="1" value={pageNumber} onChange={handleOnChange}/>
      { error && (<div>{error}</div>) }
      { data && (<div>{data}</div>) }
      {!error && !data &&(<div>loading...</div>)}
    </>
  )
};
