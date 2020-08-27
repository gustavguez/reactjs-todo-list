import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, changeStateTask } from "../redux/taskActions";

const TaskListItem = ({ id, name, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <button
        className={`btn btn-lg task ${completed ? "done" : ""}`}
        onClick={() => dispatch(changeStateTask(id, !completed))}
      >
        {name}
      </button>
      <button className="btn btn-danger delete-task" onClick={() => dispatch(removeTask(id))}>
        X
      </button>
    </li>
  );
};
export default TaskListItem;
