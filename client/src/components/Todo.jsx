import React from "react";

export const Todo = (props) => {
  return (
    <div className={"todo"}>
      <div className="checkbox"  onClick={() => props.deleteTodo(props.idProp)}></div>
      <div>{props.text}</div>
      <div className="delete-todo" onClick={() => props.deleteTodo(props.idProp)}>X</div>
    </div>
  );
};
