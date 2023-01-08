import React from "react";

export const Todo = (props) => {

 

  return (
    <div className={"todo"} /* onClick={() => props.deleteTodo()} */>
      <div className="checkbox" ></div>
      <div>{props.text}</div>
      <div className="delete-todo" >X</div>
    </div>
  );
};
