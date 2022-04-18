import { useState, useRef } from "react";

function Main(props) {
  const [state, setState] = useState(1); // Destroy when Component Unmount but change value => re-render
  const ref = useRef(2); // Destroy when Component Unmount // change value not re-render
  let localvar = 3; // Re-initialize on render

  function handleClick() {
    setState((prev) => prev + 1);
    ref.current++;
    localvar++;
  }
  return (
    <div>
      <label>
        {"Local var : "}
        {localvar}
      </label>
      <br />
      <label>
        {"ref : "}
        {ref.current}
      </label>
      <br />
      <label>
        {"state : "}
        {state}
      </label>
      <br />
      <button onClick={() => handleClick()}>Increase</button>
    </div>
  );
}
export default Main;
