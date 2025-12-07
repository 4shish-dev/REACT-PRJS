import { todoAction } from "../data/todoAction";

const todoReducer = (state, action) => {
  const ACTION_TYPES = todoAction;

  switch (action.type) {
    case ACTION_TYPES.SET_INPUT_VAL:
      return { ...state, inputValue: action.payload };

    case ACTION_TYPES.ADD_TASK: {
      if (state.inputValue === "") return state;
      const newTask = {
        id: Date.now(),
        text: state.inputValue,
        categories: state.itemCategory,
        completed: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
        inputValue: "",
      };
    }
    case ACTION_TYPES.DELETED_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((items) => items.id !== action.payload),
      };

    case ACTION_TYPES.SET_SELECTED_CAT:
      return {
        ...state,
        selectedCat: action.payload,
      };
    case ACTION_TYPES.SET_ITEM_CATEGORY:
      return {
        ...state,
        itemCategory: action.payload,
      };
    case ACTION_TYPES.COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
