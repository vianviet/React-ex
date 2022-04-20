import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../action";
import Todo from "../componenthooks/Todo";

const TodoList = () => {
  const listTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemove = useCallback(
    (t) => {
      dispatch(removeTodo(t));
    },
    [dispatch]
  );
  return (
    <ul>
      {listTodo.map((each, index) => (
        // <Todo todo={each} key={index} />
        <Todo todo={each} key={index} action={() => handleRemove(each)} />
      ))}
    </ul>
  );
};
export default TodoList;
