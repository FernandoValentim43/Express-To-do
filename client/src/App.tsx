import "./styles/main.css";

interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  return (
    <div
      id="flex-container"
      className="flex justify-center items-center h-screen bg-[#08335e]"
    >
      <div id="main" className="bg-[#185592] h-3/4 w-2/5 rounded">
        <h1 id="title">{title}</h1>
        <p>your tasks:</p>

        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">here comes the text</div>
          <div className="delete-todo">x</div>
        </div>


        <div className="todo complete">
          <div className="checkbox"></div>
          <div className="text">here comes the text</div>
          <div className="delete-todo">x</div>
        </div>



      </div>
    </div>
  );
}
export default App;
