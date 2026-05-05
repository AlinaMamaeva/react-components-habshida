import Task from "./Task";

function TaskList({ tasks, toggleStatus, deleteTask, updateTask, toggleEdit}) {
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
            toggleEdit={toggleEdit}
          />
        ))}
      </ul>
    </section>
  );
}
export default TaskList;
