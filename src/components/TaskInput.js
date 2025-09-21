import { useState } from "react";
import "./TaskInput.css"; 

function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTask(text, priority, deadline);
      setText("");
      setPriority("Medium");
      setDeadline("");
    }
  };

  return (
    <div className="task-input">
      {/* Task Text */}
      <div className="task-field">
        <label>Task:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task..."
        />
      </div>

      {/* Priority and Deadline */}
      <div className="task-field-row">
        <div className="task-field">
          <label>Priority:</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="task-field">
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
      </div>

      {/* Add Button */}
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
