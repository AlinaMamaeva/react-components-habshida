import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

//import React, {useState} from 'react';
import { useState } from "react";

import "./App.css";
import TasksFilter from "./components/TasksFilter";
import { initialTasks } from "./data/tasks";

function App() {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [tasks, setTasks] = useState(
    initialTasks.map((task) => ({
      ...task,
      createdAt: new Date().toLocaleTimeString(),
      
    })),
  );

  const toggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setEditingTaskId((prev) => (prev === id ? null : prev));
  };

  const updateTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle} : task,
      ),
    );
    setEditingTaskId(null);
  };
  const toggleEdit = (id) => {
    setEditingTaskId((prev) => (prev === id ? null : id)
      
    );
  };

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      title: text,
      // status: "active",
      completed: false,
     // isEditing: false,
      createdAt: new Date().toLocaleTimeString(),
    };
    setTasks((prev) => [ newTask, ...prev]);
  };

  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });
  const activeTasks = tasks.filter((task) => !task.completed).length;

  const clearCompleted = () => {
    console.log('before', tasks);
    
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        toggleStatus={toggleStatus}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleEdit={toggleEdit}
        editingTaskId= {editingTaskId}
      />

      <Footer clearCompleted={clearCompleted} activeTasks={activeTasks}>
      <TasksFilter filter={filter} setFilter={setFilter} />
      </Footer>

    </section>
  );
}

export default App;
