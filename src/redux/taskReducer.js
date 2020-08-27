import { TASK_ACTIONS } from "./taskActions";

const initialState = [];

const taskReducer = function (state = initialState, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD:
      return [...state, action.payload];

    case TASK_ACTIONS.REMOVE:
      return [...state.filter((task) => task.id !== action.payload)];

    case TASK_ACTIONS.CHANGE_STATE:
      return [
        ...state.map((t) =>
          t.id === action.payload.id ? { ...t, completed: action.payload.completed } : t
        ),
      ];

    default:
      return state;
  }
};

export default taskReducer;
