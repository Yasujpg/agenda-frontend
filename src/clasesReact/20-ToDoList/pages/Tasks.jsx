import { useState } from "react";
import MonthGrid from "../components/MonthGrid";
import TaskForm from "../components/TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Reunión",
      date: "2026-01-07",
      completed: false,
      type: "work"
    },
    {
      id: 2,
      title: "Gimnasio",
      date: "2026-01-10",
      completed: false,
      type: "personal"
    },
    {
      id: 3,
      title: "Entrega proyecto",
      date: "2026-01-15",
      completed: false,
      type: "urgent"
    }
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());

  const addTask = ({ title, date }) => {
  setTasks(prev => [
    ...prev,
    {
      id: Date.now(),
      title,
      date,
      completed: false,
      type: "personal"
    }
  ]);
};



  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>My Agenda</h2>
        <TaskForm onAddTask={addTask} />
      </aside>

      <main className="calendar-container">
        <div className="month-nav">
          <button onClick={prevMonth}>‹</button>

          <span>
            {currentDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric"
            })}
          </span>

          <button onClick={nextMonth}>›</button>
        </div>

        <MonthGrid
          tasks={tasks}
          setTasks={setTasks}
          currentDate={currentDate}
        />
      </main>
    </div>
  );
};

export default Tasks;
