import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !date) return;

    onAddTask({
      title,
      date
    });

    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={submit}>
      <h3>Nueva tarea</h3>

      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Añadir</button>
    </form>
  );
};

export default TaskForm;

