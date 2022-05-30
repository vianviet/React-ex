import "./App.css";
// import AddTodo from "./componenthooks/AddTodo";
import AddTodoReducer from "./componenthooks/AddTodoReducer";
import TestRender from "./componenthooks/TestRender";
// import TodoList from "./componenthooks/TodoList";

function App() {
  return (
    <div className="App">
      <TestRender></TestRender>
      <AddTodoReducer />
      {/* <AddTodo/> */}
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
