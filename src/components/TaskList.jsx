import Task from "./Task";

function TaskList({tasks}) {
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks.map((task) => (
            <Task key ={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}
 export default TaskList