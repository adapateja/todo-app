import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks found 🚀</p>
      ) : (
        tasks.map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
