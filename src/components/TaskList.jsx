import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks }) => {
  return (
    <ul className="list-group">
      {tasks &&
        tasks.map((task) => (
          <TaskListItem key={task.id} id={task.id} name={task.name} completed={task.completed} />
        ))}
    </ul>
  );
};
export default TaskList;
