import { useState, useEffect } from "react";
import { DialogRadix } from "./components/DialogRadix";
import { Todo } from "./components/todo";

function App() {
  const API = "http://localhost:3000";
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  //fetch the todos from the api
  const getTodos = () => {
    fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  //useEffect
  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  //create todo
  const createTodo = async () => {
    const data = await fetch("http://localhost:3000/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);
  };

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
              className="p-8 text-white text-5xl tracking-[0.8rem] font-medium mb-2"
            >
              TODO
            </h1>

            <DialogRadix />
          </div>

          <div className="todos">
            {todos.map((todo) => (
              <Todo
                key={todo._id}
                text={todo.text}
                todoComplete={todo.complete}
                idProp={todo._id}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit">AAAAAA</button>
        </form>
      </div>
    </section>
  );
}
export default App;
