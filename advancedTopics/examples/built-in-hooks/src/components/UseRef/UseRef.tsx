import { useRef } from "react";

export const UseRef = () => {
    const inputEl = useRef<null | HTMLInputElement>(null);

    const onButtonClick = () => {
      if(!inputEl.current?.value) {
        inputEl.current?.focus();
        inputEl.current?.classList.add('error');
      }
      else {
        inputEl.current?.classList.remove('error');
      }
    };

    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Submit</button>
      </>
    );
}