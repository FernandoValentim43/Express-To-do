import React, { useState, useEffect } from "react";
import { DialogRadix } from "./components/DialogRadix";
import { Todo } from "./components/todo";
import { EmojiPicker } from "./components/EmojiPicker"



function App() {

  const API = "https://express-todo-api.onrender.com";
  const [todos, setTodos] = useState([]);

  
  if(localStorage.getItem("firstTime") == null){
    alert(`The backend of this project is hosted as a free web service at render.com. It is automatically spun down after 15 minutes of inactivity. When a new request comes in, Render spins it up again, and it can take up to ~30 seconds for the intial boot, so you may have to wait a little`);
    localStorage.setItem("firstTime",true);
 }

 

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
  const createTodo = async (todoValue) => {
    if (todoValue == "") {
      console.log("error empty todo")
    } else {
      const data = await fetch(API + "/todo/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: todoValue,
        }),
      }).then((res) => res.json());

      setTodos([...todos, data]);
    }
  };

  //complete the todo

  const completeTodo = async (id) => {
    const data = await fetch(API + "/todo/complete/" + id).then(
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
    const data = await fetch(API + "/todo/delete/" + id, {
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

            <DialogRadix createTodo={createTodo} />
          </div>

          
          
          <EmojiPicker/>

         

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
      </div>
    </section>
  );
}
export default App;
