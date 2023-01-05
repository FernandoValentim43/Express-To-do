import { useState, useEffect } from "react";

function App() {
  const API = "http://localhost:3000";
  const [todos, setTodos] = useState([]);

  //fetch the todos from the api
  const getTodos = () => {
    fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  //
  useEffect(() => {
    getTodos();
    //todos.map((todo) => console.log(todo))
  }, []);

  //complete the todo
  const completeTodo = async (id) => {
    const data = await fetch("http://localhost:3000/todo/complete/" + id).then(
      (res) => res.json()
    );

    setTodos((todos) =>
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }
        return todo;
      })
    );
  };

  //delete the todo
  const deleteTodo = async (id) => {
    const data = await fetch("http://localhost:3000/todo/delete/" + id, {
      method: "DELETE",
    }).then((res) => res.json());

    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div
          className={"todo " + (todo.complete ? "complete" : "")}
          key={todo._id}
        >
          <div
            className="checkbox"
            onClick={() => completeTodo(todo._id)}
          ></div>
          <div className="text">{todo.text}</div>
          <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
            X
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
