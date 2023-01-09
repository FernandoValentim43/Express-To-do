import { useState, useEffect } from "react";
import { Todo } from "./components/todo";

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
    console.log(todos);
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
    <section
      id="background-image"
      className="bg-cover w-screen h-56 bg-no-repeat bg-[url('/index.png')] "
    >
      <div
        id="main-container"
        className="justify-center items-center flex h-screen w-screen"
      >
        <div id="main">
          <div className="header">
            <h1
              id="title"
              className="p-4 text-white text-5xl tracking-[0.8rem] font-medium mb-16"
            >
              TODO
            </h1>

            <div className="middle">
              <div className="checkbox"></div>
            </div>
          </div>

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
                <div className="delete-todo">X</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
