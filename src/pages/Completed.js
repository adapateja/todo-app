import TaskList from "../components/TaskList";

function Completed({ tasks, toggleComplete, deleteTask }) {
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        ✅ Completed Tasks
      </h2>

      {completedTasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          No completed tasks yet 🎉
        </p>
      ) : (
        <TaskList
          tasks={completedTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={() => {}}
        />
      )}
    </div>
  );
}

export default Completed;
