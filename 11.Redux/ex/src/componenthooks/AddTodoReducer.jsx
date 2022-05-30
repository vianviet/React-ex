import { useReducer, useState } from "react";
import { addTodo } from "../action";
import todos from "../reducers/todos";

const AddTodoReducer = () => {
  console.log("render addtodoReducer");
  const [text, setText] = useState("");
  const [listTodo, dispatch] = useReducer(todos, ["Hi", "Hi2"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {listTodo.map((each, index) => (
          <li key={index}>{each}</li>
        ))}
      </ul>
    </>
  );
};
export default AddTodoReducer;
