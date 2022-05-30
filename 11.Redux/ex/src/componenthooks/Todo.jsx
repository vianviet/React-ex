// import { useDispatch } from "react-redux";
// import { removeTodo } from "../action";
import { memo } from "react";

const Todo = (props) => {
  console.log("render Todo");
  // const dispatch = useDispatch();
  return (
    <li>
      {props.todo}
      {/* <button onClick={() => dispatch(removeTodo(props.todo))}>x</button> */}
      <button onClick={props.action}>x</button>
    </li>
  );
};
export default memo(Todo);
