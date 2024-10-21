import React, { useState } from 'react';
import Column from './Column';
import ColumnEditor from './ColumnEditor';
import TaskSearch from './TaskSearch';
import TaskModal from './TaskModal'; // For adding tasks
import EditTaskModal from './EditTaskModal'; // For editing tasks
import { v4 as uuidv4 } from 'uuid';

const initialColumns = [
  {
    id: 'todo',
    title: 'TODO',
    tasks: [],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [],
  },
];

const Board = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentColumnId, setCurrentColumnId] = useState(null); // Track current column ID for adding tasks

  const moveTask = (taskId, newColumnId) => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.filter((task) => task.id !== taskId),
    }));

    const taskToMove = columns.flatMap((col) => col.tasks).find((task) => task.id === taskId);

    const newColumns = updatedColumns.map((column) => {
      if (column.id === newColumnId) {
        return {
          ...column,
          tasks: [...column.tasks, taskToMove],
        };
      }
      return column;
    });

    setColumns(newColumns);
  };

  const addColumn = (title) => {
    if (title.trim() === '') return;
    const newColumn = { id: uuidv4(), title, tasks: [] };
    setColumns([...columns, newColumn]);
  };

  const addTask = (task, columnId) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, { ...task, id: uuidv4() }],
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  const deleteColumn = (columnId) => {
    const columnToDelete = columns.find(column => column.id === columnId);

    if (columnToDelete && columnToDelete.tasks.length > 0) {
      alert("You cannot delete a non-empty column. Please move tasks to another column before deleting.");
      return;
    }

    const updatedColumns = columns.filter((column) => column.id !== columnId);
    setColumns(updatedColumns);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const updateTask = (updatedTask) => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    }));
    setColumns(updatedColumns);
    setIsEditModalOpen(false);
  };

  const deleteTask = (taskId) => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.filter((task) => task.id !== taskId),
    }));
    setColumns(updatedColumns);
    setIsEditModalOpen(false);
  };

  const handleAddTask = (columnId) => {
    setCurrentColumnId(columnId);
    setIsModalOpen(true); // Open the add task modal
  };

  return (
    <div>
      <div className="header">
        <TaskSearch />
      </div>
      <div className="board">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            moveTask={moveTask}
            deleteColumn={deleteColumn}
            onEditTask={handleEditTask}
            onAddTask={handleAddTask} // Pass down the add task handler
          />
        ))}
        <ColumnEditor addColumn={addColumn} />
      </div>

      {/* Task Modal for Adding Tasks */}
      {isModalOpen && (
        <TaskModal
          columnId={currentColumnId} // Pass the current column ID
          addTask={addTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <EditTaskModal
          task={selectedTask}
          onUpdate={updateTask}
          onDelete={deleteTask}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Board;
