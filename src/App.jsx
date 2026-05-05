import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

//import React, {useState} from 'react';
import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      status: "completed",
      isEditing: false,
    },
    {
      id: 2,
      description: "Editing task",
      status: "active",
      isEditing: false,
    },
    {
      id: 3,
      description: "Active task",
      status: "active",
      isEditing: false,
    },
  ]);

  const toggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "active" : "completed",
            }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newDescription) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, description: newDescription, isEditing: false }
          : task,
      ),
    );
  };
  const toggleEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    );
  };

  return (
    <section className="todoapp">
      <NewTaskForm />

      <TaskList
        tasks={tasks}
        toggleStatus={toggleStatus}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleEdit={toggleEdit}
      />

      <Footer />
    </section>
  );
}

export default App;
