import TaskBlock from "./TaskBlock";

const DayColumn = ({ date, tasks, onEdit, onDelete, onToggle, onDrop }) => {
  if (!date) return <div className="day-column empty"></div>;

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    const taskId = e.dataTransfer.getData("taskId");
    if (!taskId) return;
    onDrop(Number(taskId), date);
  };

  return (
    <div
      className="day-column"
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.currentTarget.classList.add("drag-over")}
      onDragLeave={(e) => e.currentTarget.classList.remove("drag-over")}
      onDrop={handleDrop}
    >
      <div className="day-title">{date.getDate()}</div>

      {tasks.map((task) => (
        <TaskBlock
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default DayColumn;
