import { useCallback, useState } from "react";
import Memo from "./Memo";

function Main() {
  const [state, setState] = useState(0);

  const handleClick = useCallback(() => {
    setState((prevState) => prevState + 1);
  }, []);
  return (
    <div>
      <Memo click={handleClick} />
      <label>
        {"state : "}
        {state}
      </label>
    </div>
  );
}
export default Main;
