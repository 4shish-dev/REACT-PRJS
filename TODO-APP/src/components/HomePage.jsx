import React, { useContext } from "react";
import TodoList from "./TodoList.jsx";
import "../App.css";
import TodoContext from "../context/task/TodoContext.jsx";
const HomePage = () => {
  //useContext hook
  const {
    state,
    dispatch,
    categories,
    dropMenu,
    filteredTask,
    ACTION_TYPES,
    handleSubmit,
  } = useContext(TodoContext);
  return (
    <>
      <div className="main-container">
        <div className="flex">
          <div className="flex">
            {categories.map((category, index) => (
              <button
                className=" cats"
                key={index}
                value={category}
                onClick={(e) =>
                  dispatch({
                    type: ACTION_TYPES.SET_SELECTED_CAT,
                    payload: e.target.value,
                  })
                }
              >
                {category}
              </button>
            ))}
          </div>
          <form className="flex" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="enter your tasks here.."
                onChange={(e) =>
                  dispatch({
                    type: ACTION_TYPES.SET_INPUT_VAL,
                    payload: e.target.value,
                  })
                }
                value={state.inputValue}
              />
            </div>
            <select
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPES.SET_ITEM_CATEGORY,
                  payload: e.target.value,
                })
              }
              value={state.itemCategory}
            >
              {dropMenu.map((cats, index) => (
                <option value={cats} key={index}>
                  {cats}
                </option>
              ))}
            </select>
            <div>
              <button className="add" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <TodoList task={state.task} filteredTask={filteredTask}></TodoList>
      </div>
    </>
  );
};

export default HomePage;
