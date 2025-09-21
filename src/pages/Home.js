import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useState } from "react";

function Home({ tasks, addTask, toggleComplete, deleteTask, editTask }) {
  const [query, setQuery] = useState("");

  const filteredTasks = tasks.filter(
    (t) => !t.completed && t.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        📋 Pending Tasks
      </h2>

      {/* Task Input */}
      <TaskInput addTask={addTask} />

      {/* Search */}
      <div className="my-3">
        <input
          type="text"
          placeholder="Search tasks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2
                     focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200
                     dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-400"
        />
      </div>

      {/* Task List  */}
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Home;
