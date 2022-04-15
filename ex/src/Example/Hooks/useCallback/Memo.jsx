import { memo } from "react";

function Memo({ click }) {
  alert("I'm Memo");
  return <button onClick={click}>Increase</button>;
}
export default memo(Memo);
// export default Memo;
