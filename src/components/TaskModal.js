import React, { useState } from 'react';

const TaskModal = ({ columnId, addTask, onClose }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('FEATURE');
  const [effort, setEffort] = useState('');
  const [priority, setPriority] = useState('P1');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      type,
      effort,
      priority,
      description,
      assignee,
    };
    addTask(newTask, columnId); // Pass columnId to addTask
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="BUG">BUG</option>
            <option value="FEATURE">FEATURE</option>
          </select>

          <label>Effort:</label>
          <input value={effort} onChange={(e) => setEffort(e.target.value)} type="number" required />

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

          <button type="submit">Add Task</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
