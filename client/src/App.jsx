import "./styles/main.css";
import { useState, useEffect } from "react";

const API = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState();

  //fetch the API data
  const GetTodos = () => {
    fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log("Error:", err));
  };

  useEffect(() => {
    GetTodos();

    console.log(todos);
  }, []);

  return (
    <div id="container" className="bg-red">
      <div id="main">
        <h1 id="title">Title</h1>
        <p>your tasks:</p>

        <div className="todos">
          <div className="todo">
            <div className="checkbox"></div>

            <div className="text"></div>
            <div className="delete-todo">x</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
