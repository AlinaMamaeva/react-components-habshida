import { useState } from "react";

function NewTaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("new task added: ", text);
      addTask(text);
     
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        autoFocus
        
      />
    </header>
  );
}

export default NewTaskForm;
