import DayColumn from "./DayColumn";
import "./calendar.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarGrid = ({ tasks, onDropTask, onToggleComplete }) => {
  return (
    <div className="calendar fade-in">
      {DAYS.map((day) => (
        <DayColumn
  key={index}
  date={date}
  tasks={tasks.filter(
    (t) => t.date === date.toISOString().split("T")[0]
  )}
  onEdit={editTask}
  onDelete={deleteTask}
  onToggle={toggleTask}
  onDrop={handleDrop}
/>

      ))}
    </div>
  );
};

export default CalendarGrid;
