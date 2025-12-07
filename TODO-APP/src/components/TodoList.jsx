import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ task, filteredTask }) => {
  return (
    <>
      <TodoItem filteredTask={filteredTask} task={task} />
    </>
  );
};

export default TodoList;
