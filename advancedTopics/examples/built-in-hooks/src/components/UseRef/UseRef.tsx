import { useRef, useState } from "react";

export const UseRef = () => {
    const inputEl = useRef<null | HTMLInputElement>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    const onButtonClick = () => {
      if(!inputEl.current?.value) {
        inputEl.current?.focus();
        inputEl.current?.classList.add('error');
        setHasError(true);
      }
      else {
        inputEl.current?.classList.remove('error');
        setHasError(false);
      }
    };

    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Submit</button>
        {hasError && <p>Please Enter a value</p>}
      </>
    );
}