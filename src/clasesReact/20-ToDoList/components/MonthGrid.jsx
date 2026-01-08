import { useState } from "react";
import DayColumn from "./DayColumn";
import "./calendar.css";

const getMonthDays = (year, month) => {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days = [];

  const start = first.getDay() === 0 ? 6 : first.getDay() - 1;
  for (let i = 0; i < start; i++) days.push(null);

  for (let d = 1; d <= last.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return days;
};

const MonthGrid = ({ tasks, setTasks, currentDate }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getMonthDays(year, month);

  const handleDrop = (taskId, date) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, date: date.toLocaleDateString("en-CA") }
          : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, title) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title } : t))
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="calendar">
      {days.map((date, index) => {
        const dayTasks =
          date !== null
            ? tasks.filter(
                (t) => t.date === date.toLocaleDateString("en-CA")
              )
            : [];

        return (
          <DayColumn
            key={index}
            date={date}
            tasks={dayTasks}
            onDelete={deleteTask}
            onEdit={editTask}
            onToggle={toggleTask}
            onDrop={handleDrop}
          />
        );
      })}
    </div>
  );
};

export default MonthGrid;
