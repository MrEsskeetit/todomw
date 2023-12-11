import React from 'react';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} - {task.date.toLocaleString()}
          <button onClick={() => removeTask(task.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
