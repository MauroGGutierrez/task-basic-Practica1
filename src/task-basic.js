import React, { useState } from "react";
import "./task-basic.css";

function TaskBasic() {
  const [arraytasks, setArrayTasks] = useState([]);
  const [enter, setEnter] = useState("");
  const addButton = (e) => {
    e.preventDefault();
    setEnter("");
    setArrayTasks([...arraytasks, enter]);
  };

  return (
    <div className="main-task">
      <h1>Task Basic</h1>
      <form>
        <h3>Enter a task</h3>
        <input
          type="text"
          placeholder="Enter task..."
          value={enter}
          onChange={(e) => setEnter(e.target.value)}
        />
        <button type="button" onClick={addButton}>
          ADD TASK
        </button>
        <div className="tasks-list">
          {arraytasks.map((task) => (
            <p key={task}> {task} </p>
          ))}
        </div>
      </form>
    </div>
  );
}

export default TaskBasic;
