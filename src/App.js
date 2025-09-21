import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import { useState, useEffect } from "react";
import { saveTasks, loadTasks } from "./utils/storage";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // ADD: Toggle dark class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addTask = (text, priority = "Medium", deadline = "") => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      deadline
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    const newText = prompt("Edit your task:", task.text);
    const newDeadline = prompt("Edit deadline (YYYY-MM-DD):", task.deadline);
    const newPriority = prompt("Edit priority (Low/Medium/High):", task.priority);
    if (newText) {
      setTasks(tasks.map(t => t.id === id ? { ...t, text: newText, deadline: newDeadline, priority: newPriority } : t));
    }
  };

  return (
    <div className="min-h-screen">
      <Router>
        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={
            <Home
              tasks={tasks}
              addTask={addTask}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          }/>
          <Route path="/completed" element={
            <Completed
              tasks={tasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
