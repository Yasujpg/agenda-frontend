import axios from "axios";
import "./taskModal.css";

const TaskModal = ({ date, tasks, onClose, onTaskUpdated }) => {
  const toggleCompleted = async (task) => {
    await axios.put(
      `http://localhost:4000/api/tasks/${task.id}/complete`,
      { completed: !task.completed }
    );
    onTaskUpdated();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3>{date}</h3>

        {tasks.length === 0 && <p>No tasks</p>}

        {tasks.map(task => (
          <div
            key={task.id}
            className={`modal-task ${task.completed ? "done" : ""}`}
            onClick={() => toggleCompleted(task)}
          >
            {task.title}
          </div>
        ))}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;


