function Task(props) {
  const task = props.task
  
    return (
         <li className={task.status}>
      <div className="view">
        <input className="toggle" type="checkbox" />

        <label>
          <span className="description">{task.description}</span>
          <span className="created">created just now</span>
        </label>

        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {task.status === "editing" && (
        <input
          type="text"
          className="edit"
          defaultValue={task.description}
        />
      )}
    </li>
    )
}
export default Task