import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskActions";

const AddTaskForm = (props) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    //Random id
    const taskId = new Date().getTime();

    //Dispatch task
    dispatch(addTask(taskId, taskName));

    //Clear form
    setTaskName("");
  };

  return (
    <form className="form-inline" onSubmit={submitHandler}>
      <div className="form-group w-75">
        <input
          className="form-control form-control-lg w-100"
          placeholder="Ingrese el nombre de la tarea"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" disabled={!!taskName ? false : true}>
        Agregar
      </button>
    </form>
  );
};
export default AddTaskForm;
