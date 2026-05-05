import { useState, useEffect } from "react";

function Task(props) {
  const { task, toggleStatus, deleteTask, updateTask, toggleEdit } = props;

  const [value, setValue] = useState(task.description);

  useEffect(() => {
    setValue(task.description);
  }, [task.isEditing]);

  return (
    <li className={`${task.status} ${task.isEditing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.status === "completed"}
          onChange={() => toggleStatus(task.id)}
        />

        <label>
          <span className="description">{task.description}</span>
          <span className="created">created just now</span>
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
            }
          }}
        />
      )}
    </li>
  );
}
export default Task;
