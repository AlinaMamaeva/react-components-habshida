import { useState, useEffect } from "react";

function Task(props) {
  const { task, toggleStatus, deleteTask, updateTask, toggleEdit } = props;

  const [value, setValue] = useState(task.title);

  useEffect(() => {
    setValue(task.title);
  }, [task.title, task.isEditing]);


  return (
    <li className={`${task.completed  ? "completed" : ""} ${task.isEditing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleStatus(task.id)}
        />

        <label>
          <span className="title">{task.title}</span>
          <span className="created"> {task.createdAt} </span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => toggleEdit(task.id)}
        ></button>

        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(task.id)}
        ></button>
      </div>

      {task.isEditing && (
        <input
          type="text"
          className="edit"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateTask(task.id, value);
              toggleEdit(task.id);
            }
          }}
        />
      )}
    </li>
  );
}
export default Task;
