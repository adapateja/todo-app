import "./TaskItem.css";

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {

  const getPriorityColor = (priority) => {
    if (priority === "High") return "priority-high";
    if (priority === "Medium") return "priority-medium";
    return "priority-low";
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  };

  return (
    <div
      className={`task-item ${task.completed ? "done" : ""}`}
    >
      <div>
        <h3 className={task.completed ? "line-through" : ""}>Task Name: {task.text}</h3>

        {/* Timestamp */}
        <p className="timestamp">
          <strong>Started At:</strong> {formatDate(task.createdAt)}
        </p>

        {/* Deadline */}
        {task.deadline && (
          <p className="timestamp">
            <strong>Deadline:</strong> {task.deadline}
          </p>
        )}

        {/* Priority */}
        <p className={getPriorityColor(task.priority)}>
          <strong>Priority:</strong> {task.priority}
        </p>
      </div>

      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button onClick={() => editTask(task.id)}>Edit ✏️</button>
        <button onClick={() => deleteTask(task.id)}>Delete 🗑️</button>
      </div>
    </div>
  );
}

export default TaskItem;
