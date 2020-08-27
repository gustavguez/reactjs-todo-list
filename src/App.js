import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import AddTaskForm from "./components/AddTaskForm";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="m-4">TODO</h1>
        </div>
        <div className="col-12">
          <AddTaskForm />
        </div>
        <div className="col-12">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
