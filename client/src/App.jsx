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
    console.log(todos)
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
      className="bg-cover w-screen h-56  bg-no-repeat bg-[url('/index.png')] "
    >
      <div
        id="main-container"
        className="justify-center items-center flex h-screen w-screen"
      >
        <div id="main">
          <h1
            id="title"
            className="p-4 text-white text-5xl tracking-[0.8rem] font-medium"
          >
            TODO
          </h1>

          <div className="todos">
            {todos.map((todo) => (
              <Todo text={todo.text} key={todo._id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
