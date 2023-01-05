import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodos();
    todos.map((todo) => console.log(todo))
  }, []);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className={"todo " + (todo.complete ? "complete" : "")} key={todo._id}>
          <div className="checkbox "></div>
          <div className="text">{todo.text}</div>
          <div className="delete-todo">X</div>
        </div>
      ))}
    </div>
  );
}
export default App;
