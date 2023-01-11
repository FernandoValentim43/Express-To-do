import { useState, useEffect } from "react";
import { Todo } from "./components/todo";

import * as Dialog from '@radix-ui/react-dialog';

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

  //useEffect
  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);


  //create todo
  const createTodo = async () => {
    const data = await fetch("http://localhost:3000/todo/new" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: "banana"
      })
    }).then(res => res.json())

    setTodos([...todos, data])
  }


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



            <div className="middle">
              <div className="add">+</div>
              <div>Add a Todo</div>
            </div>

            
            <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>

       
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>


        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>





          </div>

          <div className="todos">
            {todos.map((todo) => (
              <Todo
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
