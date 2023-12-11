import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="taskInput"
          value={taskText}
          onChange={handleInputChange}
          placeholder="Dodaj nowe zadanie"
        />
        <button type="submit">Dodaj Zadanie</button>
      </form>
    </div>
  );
};

export default TaskForm;
