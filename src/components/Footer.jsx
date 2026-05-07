import TaskFilter from "./TasksFilter";

function Footer({ clearCompleted, activeTasks}) {
  return (
    <footer className="footer">
      <span className="todo-count"> {activeTasks}  items left</span>

      

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
