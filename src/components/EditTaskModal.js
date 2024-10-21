import React, { useState } from 'react';

const EditTaskModal = ({ task, onUpdate, onDelete, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [type, setType] = useState(task.type);
  const [effort, setEffort] = useState(task.effort);
  const [priority, setPriority] = useState(task.priority);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      type,
      effort,
      priority,
      description,
      assignee,
    };
    onUpdate(updatedTask);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="BUG">BUG</option>
          <option value="FEATURE">FEATURE</option>
        </select>

        <label>Effort:</label>
        <input value={effort} onChange={(e) => setEffort(e.target.value)} type="number" />

        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Assignee:</label>
        <input value={assignee} onChange={(e) => setAssignee(e.target.value)} />

        <div className="modal-buttons">
          <button onClick={handleUpdate}>Update Task</button>
          <button onClick={handleDelete}>Delete Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
