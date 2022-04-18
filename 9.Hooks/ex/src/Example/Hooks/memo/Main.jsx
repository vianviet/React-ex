import { useState } from "react";
import Memo from "./Memo";

function Main(props) {
  const [state, setState] = useState(1);

  function handleClick() {
    setState((prev) => prev + 1);
  }
  return (
    <div>
      <label>
        {"state : "}
        {state}
      </label>
      <br />
      <button onClick={() => handleClick()}>Increase</button>
      <br />
      <Memo />
    </div>
  );
}
export default Main;
