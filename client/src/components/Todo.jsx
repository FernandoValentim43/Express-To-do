import React from "react";

export const Todo = (props) => {
  return (
    <div className={"todo"}>
      <div className="checkbox"></div>
      <div>{props.text}</div>
      <div className="delete-todo" onClick={() => props.deleteTodo(props.idProp)}>X</div>
    </div>
  );
};
