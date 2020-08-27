export const TASK_ACTIONS = {
  ADD: "ADD_TASK",
  REMOVE: "REMOVE_TASK",
  CHANGE_STATE: "CHANGE_STATE_TASK",
};

export function addTask(id, name) {
  return {
    type: TASK_ACTIONS.ADD,
    payload: {
      id,
      name,
      completed: false,
    },
  };
}

export function changeStateTask(id, state) {
  return {
    type: TASK_ACTIONS.CHANGE_STATE,
    payload: {
      id,
      completed: state,
    },
  };
}

export function removeTask(id) {
  return {
    type: TASK_ACTIONS.REMOVE,
    payload: id,
  };
}
