import React from "react";
import { useSelector } from "react-redux";

import TaskListPlaceholder from "./TaskListPlaceholder";
import TaskList from "./TaskList";

const Tasks = (props) => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <>
      <h2 className="m-4">Lista de tareas</h2>
      {tasks.length > 0 ? <TaskList tasks={tasks} /> : <TaskListPlaceholder />}
    </>
  );
};
export default Tasks;
