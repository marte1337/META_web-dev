import { useRef } from "react";

//acessing the DOM with useRef
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <div className="Field3">
        <h2>Text Input with Focus-Button (useRef)</h2>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );
  }

  export default TextInputWithFocusButton