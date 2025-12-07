import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./todoReducer";
import { getlocalStorageData, setlocalStorageData } from "../data/localStorage";
import { todoAction } from "../data/todoAction";

export const TodoProvider = ({ children }) => {
  const initialValues = {
    inputValue: "",
    tasks: getlocalStorageData(),
    selectedCat: "all task",
    itemCategory: "Personal",
  };
  const ACTION_TYPES = todoAction;
  const categories = ["all task", "Personal", "Work"];
  const dropMenu = ["Personal", "Work"];

  const [state, dispatch] = useReducer(todoReducer, initialValues);

  setlocalStorageData(state);

  //filter task based on category
  const filteredTask =
    state.selectedCat === "all task"
      ? state.tasks
      : state.tasks.filter((items) => items.categories === state.selectedCat);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD_TASK });
  };
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        categories,
        dropMenu,
        filteredTask,
        ACTION_TYPES,
        handleSubmit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
