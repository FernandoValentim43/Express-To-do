import React from "react";

export const Todo = (props) => {
  return (
    <div
      className={"todo " + (props.todoComplete ? "complete" : "")}
      key={props.idProp}
    >
      <div
        className="checkbox"
        onClick={() => props.completeTodo(props.idProp)}
      ></div>
      <div>{props.text}</div>
      <div
        className="delete-todo"
        onClick={() => props.deleteTodo(props.idProp)}
      >
        X
      </div>
    </div>
  );
};
