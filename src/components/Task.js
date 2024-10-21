import React from 'react';

const Task = ({ task, onEdit }) => {
  return (
    <div className="task" onClick={onEdit}> {/* Call onEdit when clicked */}
      <h4>{task.title}</h4>
      <p>Type: {task.type}</p>
      <p>Effort: {task.effort}</p>
      <p>Priority: {task.priority}</p>
      <p>Assignee: {task.assignee}</p>
    </div>
  );
};

export default Task;
