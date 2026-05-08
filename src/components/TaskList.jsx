import Task from "./Task";

function TaskList({
  tasks,
  toggleStatus,
  deleteTask,
  updateTask,
  toggleEdit,
  editingTaskId,
}) {
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
            isEditing={editingTaskId === task.id}
          />
        ))}
      </ul>
    </section>
  );
}
export default TaskList;
