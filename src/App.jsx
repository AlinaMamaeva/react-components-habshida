import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const tasks = [
    {
      id: 1,
      description: "Completed task",
      status: "completed",
    },
    {
      id: 2,
      description: "Editing task",
      status: "editing",
    },
    {
      id: 3,
      description: "Active task",
      status: "",
    },
  ];

  return (
    <section className="todoapp">
      <NewTaskForm />
      <TaskList tasks={tasks} />

      <Footer />
    </section>
  );
}

export default App;
