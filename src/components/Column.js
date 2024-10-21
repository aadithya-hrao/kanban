
import React from 'react';
import Task from './Task';

const Column = ({ column, moveTask, deleteColumn, onEditTask, onAddTask }) => {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <button onClick={() => deleteColumn(column.id)}>Delete Column</button>
      
      {/* Add Task Button */}
      <button onClick={() => onAddTask(column.id)}>Add Task</button>

      <div className="task-list">
        {column.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={() => onEditTask(task)} // Call onEditTask with the task when clicked
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
