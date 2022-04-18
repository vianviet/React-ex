import { memo } from "react";

function Memo(props) {
  alert("I'm Memo");
  return <h1>{props.text}</h1>;
}
export default memo(Memo);
// export default Memo;
