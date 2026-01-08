import { useState } from "react";

const TaskBlock = ({ task, onToggle, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const save = () => {
    if (!value.trim()) return;
    onEdit(task.id, value);
    setEditing(false);
  };

  return (
    <div
      className={`task ${task.type} ${task.completed ? "completed" : ""}`}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("taskId", task.id);
        e.currentTarget.classList.add("dragging");
      }}
      onDragEnd={(e) => {
        e.currentTarget.classList.remove("dragging");
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setEditing(true);
      }}
    >
      {editing ? (
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => e.key === "Enter" && save()}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onToggle(task.id);
            }}
          >
            {task.title}
          </span>

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
};

export default TaskBlock;


