import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../action";

const AddTodo = () => {
  console.log("render add todo");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
};
export default AddTodo;
