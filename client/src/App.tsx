import "./styles/main.css";
import { useState, useEffect } from "react";

const API = "http://localhost:3000";

interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  //fetch the API data
  const GetTodos = () => {
    fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log("Error:", err));
  };

  useEffect(() => {
    GetTodos();

    todos.map((todo) => console.log(todo));
  }, []);

  return (
    <div
      id="flex-container"
      className="flex justify-center items-center h-screen bg-[#08335e]"
    >
      <div id="main" className="bg-[#185592] h-3/4 w-2/5 rounded">
        <h1 id="title">{title}</h1>
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
