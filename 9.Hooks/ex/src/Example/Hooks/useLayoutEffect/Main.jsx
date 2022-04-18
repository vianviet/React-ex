import { useEffect, useState, useLayoutEffect } from "react";

function Main(props) {
  const [state, setState] = useState(0);

  // useEffect(() => {         //Over at number 4
  //   alert("Wait a second !");
  //   if (state > 3) {
  //     setState(0);
  //   }
  // }, [state]);

  useLayoutEffect(() => {
    //Over at number 3
    alert("Wait a second !");
    if (state > 3) {
      setState(0);
    }
  }, [state]);
  return (
    <div>
      <label>{state}</label>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        Add Data
      </button>
    </div>
  );
}
export default Main;
