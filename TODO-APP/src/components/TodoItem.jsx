import React, { useContext } from "react";
import TodoContext from "../context/task/TodoContext";
import "../App.css";

import { RiDeleteBin6Line } from "react-icons/ri";

import { MdOutlineFormatStrikethrough } from "react-icons/md";
const TodoItem = ({ filteredTask }) => {
  const { ACTION_TYPES, dispatch } = useContext(TodoContext);
  return (
    <div className="list-items">
      <ul className="list">
        {filteredTask.map((task) => (
          <li key={task.id} className="flex items">
            <span>
              <ol className="items">
                <MdOutlineFormatStrikethrough
                  className="icon"
                  onClick={() =>
                    dispatch({
                      type: ACTION_TYPES.COMPLETED,
                      payload: task.id,
                    })
                  }
                />
                <span
                  className={
                    task.completed ? "stike" : "notChecked user-select"
                  }
                >
                  {task.text}
                </span>
              </ol>
            </span>
            <span className="flex user-select">
              {task.categories}
              <span
                className="delete-button"
                onClick={() =>
                  dispatch({
                    type: ACTION_TYPES.DELETED_TASK,
                    payload: task.id,
                  })
                }
              >
                <RiDeleteBin6Line />
              </span>
            </span>
          </li>
        ))}
        {filteredTask.length === 0 && (
          <li className="notask">NO TASK HAVE BEED ADDED !</li>
        )}
      </ul>
    </div>
  );
};

export default TodoItem;
