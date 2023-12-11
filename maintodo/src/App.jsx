import React, { useState } from 'react';
import './App.css';
import TaskForm from './componenty/TaskForm';
import TaskList from './componenty/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zadanie 1', date: new Date() },
    { id: 2, text: 'Zadanie 2', date: new Date() },
    { id: 3, text: 'Zadanie 3', date: new Date() },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      date: new Date(),
    };

    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista Zadań</h1>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
